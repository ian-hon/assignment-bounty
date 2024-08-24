use rocket::State;
use sqlx::{Pool, Sqlite};

use crate::utils::{ValueInt, ValueString};

#[get("/")]
pub async fn fetch_all(db: &State<Pool<Sqlite>>) -> String {
    let db = db.inner();
    let t: Vec<ValueString> = sqlx::query_as("select name from tag;")
        .fetch_all(db)
        .await
        .unwrap();

    format!("{:?}", t.iter().map(|x| x.0.clone()).collect::<Vec<String>>())
}

#[get("/<name>")]
pub async fn create(db: &State<Pool<Sqlite>>, name: String) -> String {
    let db = db.inner();

    let name = urlencoding::decode(&name).unwrap().to_string();
    let c = sqlx::query_as::<_, ValueInt>("select count(*) from tag where name = $1;")
        .bind(&name)
        .fetch_one(db)
        .await
        .unwrap()
        .0;

    if c <= 0 {
        sqlx::query("insert into tag values($1);")
            .bind(name)
            .execute(db)
            .await
            .unwrap();

        return "success".to_string();
    }
    "already exists".to_string()
}
