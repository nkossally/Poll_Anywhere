{
  entities: {
    polls: {
      1: {
        id: 1,
        body: "What is your favorite color?",
        user_id: 47,
        group_id: 5,
        respondent_ids: [1, 2, 3, 4]
        active: true
      },
      2: {
        id: 2,
        body: "What is your favorite city?",
        user_id: 47,
        group_id: 5,
        respondent_ids: [1, 2]
        active: true
      },
    },
    users: {
      47: {
        id: 47,
        username: "ProfRichards",
        first_name: Andrew,
        last_name: Richards,
        poll_ids: [1, 2],
        group_ids: [5],
        answered_polls: [5, 6, 7],
        answered_groups: [],
      },
    }
    groups: {
      5: {
        id: 5,
        poll_ids: [1, 2],
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
  },
  session: { currentUserId: 47 }
}
