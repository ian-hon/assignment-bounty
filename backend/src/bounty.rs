use rocket::State;
use serde::{Deserialize, Serialize};
use sqlx::{Pool, Sqlite};

use crate::{login_info::{LoginInformation, LoginResult}, utils};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Bounty {
    pub id: i64,
    pub author: i64,
    pub title: String,
    pub description: String,
    pub time_published: i64,
    pub due: i64, // 0 -> no due
    pub bounty: f64
}
impl Bounty {
    pub async fn create(db: &Pool<Sqlite>, author: i64, title: String, description: String, time_published: i64, due: i64, bounty: f64, thumbnail: i64) {
        sqlx::query("insert into assignment(author, title, description, time_published, due, bounty) values($1, $2, $3, $4, $5, $6, $7);")
            .bind(author)
            .bind(title)
            .bind(description)
            .bind(time_published)
            .bind(due)
            .bind(bounty)
            .bind(thumbnail)
            .execute(db)
            .await
            .unwrap();
    }
}

#[post("/<title>/<description>/<time_published>/<due>/<bounty>/<thumbnail>", data="<login>")]
pub async fn create(db: &State<Pool<Sqlite>>, login: LoginInformation, title: String, description: String, time_published: i64, due: i64, bounty: f64, thumbnail: i64) -> String {
    let db = db.inner();
    let result = login.login(db).await;
    let title = urlencoding::decode(title.as_str()).unwrap().to_string();
    let description = urlencoding::decode(description.as_str()).unwrap().to_string();

    match result {
        LoginResult::Success(u) => {
            utils::parse_response(Ok(Bounty::create(db, u, title, description, time_published, due, bounty, thumbnail).await))
        },
        _ => {
            utils::parse_response(Err(result))
        }
    }
}
