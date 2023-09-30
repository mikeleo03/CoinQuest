# CoinQuest
Financial Education WebApp for Kids

## Product Description
CoinQuest, sebuah aplikasi webapp yang membantu untuk meningkatkan literasi keuangan pada anak-anak usia dini. CoinQuest mengajarkan kebiasaan manajemen keuangan yang baik melalui sistem daily objective yang memerlukan pengawasan orang tua, memberikan pengetahuan singkat terkait keuangan melalui course pendek, mampu menjawab pertanyaan terkait finansial melalui chatbot, dan membantu anak menentukan target keuangannya sendiri dengan fitur custom daily objective.  Dengan design yang interaktif dan ramah untuk anak, CoinQuest dirancang untuk membuat edukasi literasi keuangan anak menjadi lebih menarik dan menyenangkan. Dengan adanya CoinQuest, generasi muda Indonesia diharapkan dapat tumbuh berbekalkan ilmu pemahaman mengenai konsep ekonomi dan pengelolaan finansial yang baik sejak dini untuk masa depan yang lebih cerah.

## AMN Team
1. Nathan Tenka
2. Margaretha Olivia H.
3. Michael Leon Putra W.
4. Austin Gabriel Pardosi
5. Salomo R. G. Manalu

## Project Structure
```
.
├───.next
│   ├───server
│   │   ├───app
│   │   │   └───api
│   │   │       └───(quest)
│   │   │           └───get-tasks
│   │   │               └───[id_goal]
│   │   │                   └───[id]
│   │   └───pages
│   ├───static
│   │   ├───chunks
│   │   │   └───pages
│   │   ├───development
│   │   └───webpack
│   └───types
│       └───app
│           └───api
│               └───(quest)
│                   └───get-tasks
│                       └───[id_goal]
│                           └───[id]
├───app
│   ├───(pages)
│   │   ├───course
│   │   │   └───[id]
│   │   ├───courses
│   │   ├───goals
│   │   ├───login
│   │   ├───profile
│   │   ├───saving
│   │   └───signup
│   └───api
│       ├───(course)
│       │   ├───all-course
│       │   ├───course
│       │   │   └───[id]
│       │   └───get-quiz
│       │       └───[id]
│       ├───(goals)
│       │   ├───all-goal
│       │   ├───get-quests
│       │   │   └───[id]
│       │   └───goal
│       │       ├───addnew
│       │       └───[id]
│       ├───(quest)
│       │   ├───all-quest
│       │   ├───get-tasks
│       │   │   └───[id_goal]
│       │   │       └───[id]
│       │   └───quest
│       │       └───[id]
│       ├───(savings)
│       │   ├───all-saving
│       │   └───saving
│       │       └───addnew
│       ├───(subcourse)
│       │   ├───all-subcourse
│       │   │   └───[id]
│       │   └───subcourse
│       │       └───[id]
│       ├───(tasks)
│       │   ├───all-task
│       │   └───task
│       │       └───[id]
│       └───(user)
│           ├───all-user
│           └───user
│               ├───addnew
│               ├───edit
│               │   └───[id]
│               └───[id]
├───components
│   └───ui
├───lib
├───node_modules
├───public
│   ├───assets
│   │   ├───boys
│   │   ├───planets
│   │   └───sky
│   └───fonts
├───utils
├───.env.local
├───.gitignore
├───components.json
├───next-env.d.ts
├───next.config.js
├───package-lock.json
├───package.json
├───postcss.config.js
├───README.md
├───tailwind.config.js
└───tsconfig.json
```

## Deployment
Link: https://coin-quest.vercel.app/
