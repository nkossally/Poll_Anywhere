  groups
    t.string "title", null: false
    t.integer "user_id", null: false


  polls
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "group_id"
    t.boolean "active"


  users
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "phone_number", null: false
    t.string "session_token"
    t.index ["username"], name: "index_users_on_username"
