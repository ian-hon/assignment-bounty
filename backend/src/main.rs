#[macro_use] extern crate rocket;
use sqlx::{sqlite::SqliteConnectOptions, SqlitePool};

mod utils;
mod cors;
mod soterius;

mod login_info;
mod user;

#[launch]
async fn rocket() -> _ {
    rocket::custom(rocket::config::Config::figment().merge(("port", 8005)))
        .manage(SqlitePool::connect_with(SqliteConnectOptions::new()
            .filename("db")
        ).await.unwrap())
        .attach(cors::CORS)

        

        .mount("/user/test", routes![user::test])
}
