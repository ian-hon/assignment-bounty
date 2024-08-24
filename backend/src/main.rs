#[macro_use] extern crate rocket;
use sqlx::{sqlite::SqliteConnectOptions, SqlitePool};

mod utils;
mod cors;
mod soterius;
mod login_info;

mod user;
mod tag;
mod bounty;

#[get("/")]
pub fn index() -> String {
    "assignment-bounty backend".to_string()
}

#[launch]
async fn rocket() -> _ {
    rocket::custom(rocket::config::Config::figment().merge(("port", 8005)))
        .manage(SqlitePool::connect_with(SqliteConnectOptions::new()
            .filename("db")
        ).await.unwrap())
        .attach(cors::CORS)

        .mount("/", routes![index])

        .mount("/tag/fetch_all", routes![tag::fetch_all])
        .mount("/tag/create", routes![tag::create])

        .mount("/bounty/create", routes![bounty::create])

        .mount("/user/fetch_data", routes![user::fetch_user_data])
        .mount("/user/ensure_existance", routes![user::ensure_existance])
}
