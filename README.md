# Ruby on Rails Getting Started Guide

## Overview
Basic Ruby on Rails application. Showing a list of Linkedin users with the title CIO.</br>
NOT TO BE RUN IN PRODUCTION

## Run Locally
Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Install dependencies:
```bash
bundle install
```

`If you are using Windows, you have to pass the scripts under the bin folder directly to the Ruby interpreter e.g. ruby bin\rails server.`

Set up the database:
```bash
ruby bin/rails db:migrate
```

Run the seeder:
```bash
ruby bin/rails db:seed
```

Start the server:
```bash
ruby bin\rails server
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
License
