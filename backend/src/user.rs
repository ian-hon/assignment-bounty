use rocket::State;
use serde::{Deserialize, Serialize};
use sqlx::{prelude::FromRow, Pool, Sqlite};

use crate::{login_info::{LoginInformation, LoginResult}, utils};

#[derive(FromRow, Clone, Debug, Serialize, Deserialize)]
pub struct User {
    pub id: i64,
    pub username: String,
    pub balance: f64
}
impl User {
    pub async fn lookup_user_id(id: &i64, db: &Pool<Sqlite>) -> i64 {
        let result: (i64,) = sqlx::query_as("select count(*) from user where id = $1;")
            .bind(id)
            .fetch_one(db)
            .await
            .unwrap();
        result.0
    }

    pub async fn fetch_user_data(id: &i64, db: &Pool<Sqlite>) -> User {
        sqlx::query_as::<_, User>("select * from user where id = $1;")
            .bind(id)
            .fetch_one(db)
            .await
            .unwrap()
    }
}



#[post("/", data="<login>")]
pub async fn ensure_existance(db: &State<Pool<Sqlite>>, login: LoginInformation) -> String {
    let result = login.login(db.inner()).await;
    match result {
        LoginResult::Success(user_id) => {
            utils::parse_response(Ok(user_id))
        },
        _ => utils::parse_response(Err(result))
    }
}

#[post("/", data="<login>")]
pub async fn fetch_user_data(db: &State<Pool<Sqlite>>, login: LoginInformation) -> String {
    let result = login.login(db.inner()).await;
    match result {
        LoginResult::Success(u) => {
            utils::parse_response(Ok(User::fetch_user_data(&u, db).await))
        },
        _ => utils::parse_response(Err(result))
    }
}
