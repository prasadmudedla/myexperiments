
ASK CLI Command Cheatsheet
-----------------

| Command                                   | Description                        |
| ---                                       | ---                                |
| `ask init`                                | Initialize ASK CLI with your Amazon developer account credentials            |
| `ask new`                                 | Create a new Alexa skill project on your computer, with the necessary folders and files |
| `ask -v`                                  | Check the version number.          |
| `ask deploy`                              | Deploy a skill to your developer account including your skill manifest, interaction model, and AWS Lambda functions.                  |
| `ask clone`                               | cloning an existing skill to a local skill project           |
| `ask simulate `                           | Simulates an invocation of your skill with text input.                |
| `ask lambda [subcommand]`                 | Create and update the AWS Lambda function code                 |
| `ask api [subcommand]`                    | Manage details of Alexa skills associated with your developer account.                 |


### `init command`
Initialize ASK CLI with your Amazon developer account credentials. Run this command to initialize the tool with your developer account credentials , you must run the init command before performing skill operations.
```yml
ask init [options]

ask init [--no-browser] [-l|--list-profiles] [-p|--profile] [--debug]

  Options:
    --no-browser             #display authorization url instead of opening browser
    -l, --list-profiles      #list all the profile(s) for ask-cli
    -p, --profile <profile>  #name for the profile to be created/updated
    --debug                  #ask cli debug mode
    -h, --help               #output usage information

```

### `new command`

```yml
ask new [options]

ask new [--template [template-name] [--url <url>]] [-n|--skill-name <name>] [-p|--profile <profile>] [--lambda-name <lambda-name>]

 Options:

    --template [template-name]     #create a skill project based on the chosen template
    --url <url>                    #provide a customized list of templates
    -n, --skill-name <name>        #create new skill project with skill name
    --lambda-name <lambda-name>    #customize lambda function name if necessary
    -p, --profile <profile>        #create new skill project under the chosen profile
    -h, --help                     #output usage information
```

### `deploy command`

```yml
ask deploy [options]

ask deploy [--no-wait] [-t|--target <target>] [-p|--profile <profile>] [--debug]

  Options:
     --no-wait                # asynchronous model deployment
     -t, --target <target>    # Accepted values  are: `all`, `lambda`, `skill`, and `model`
     -p, --profile <profile>  # ask cli profile
     --debug                  # ask cli debug mode
     -h, --help               # output usage information  
```

### `clone command`
Create a skill project by cloning an existing skill to a local skill project.
```yml
ask clone [options]

ask clone [-s|--skill-id <skill-id>] [-p|--profile <profile>] [--debug]

  Options:

  -s, --skill-id <skill-id>  #skill-id for the skill
  -p, --profile <profile>    #ask cli profile
  --debug                    #ask cli debug mode
  -h, --help                 #output usage information
```

### `ask simulate`
simulate a user using your skill

```yml

Usage: simulate <[-f|--file <file-path>] | [-t|--text <text>]> [-l|--locale <locale>] [-s|--skill-id <skill-id>] [-p|--profile <profile>] [--debug]

Options:

  -f, --file <file-path>     #path for simulate input file, needed if <-t, --text> is not specified.
  -t, --text <text>          #text for utterance text
  -l, --locale <locale>      #locale for the utterance text
  -s, --skill-id <skill-id>  #skill-id for the skill
  -p, --profile <profile>    #ask cli profile
  --debug                    #ask cli debug mode
  -h, --help                 #output usage information
```

ASK Lambda
-------------
The Lambda command enables you to retrieve and post code for an AWS Lambda function.

### `ask lambda`

```yml
ask lambda [options] [command]

Commands:
    download [options]  #download an existing Lambda function
    upload [options]    #upload an existing Labmda function
    log [options]       #view Cloudwatch logs for a Lambda function
```
Download an existing Lambda function

### `ask lambda download`

```yml
Usage: download [-f|--function <function>] [-d|--dest <dest>] [-p|--profile <profile>]

  Options:

  -f, --function <function>  #download with function name
  -d, --dest <dest>          #set the path of downloaded project
  -p, --profile <profile>    #ask cli profile
  -h, --help                 #output usage information
```

### `ask lambda upload`
upload an existing Lambda function
```yml
Usage: upload <-f|--function <function>> [-s|--src <source>] [-p|--profile <profile>]

  Options:

    -f, --function <function>  #upload to the specified Lambda function
    -s, --src <source>         #upload specified source folder
    -p, --profile <profile>    #ask cli profile
    -h, --help                 #output usage information
```
### `ask lambda log`

View Cloudwatch logs for a Lambda function
```yml

Usage: log <-f|--function <function>> [--start-time <start-time>] [--end-time <end-time>] [--limit <number>] [--raw] [-p|--profile <profile>]

Options:

  -f, --function <function>  #display logs by Lambda function name
  --start-time <start-time>  #start time for the log time range
  --end-time <end-time>      #end time for the log time range
  --limit <number>           #number of log entries to display
  --raw                      #display the logs without color or formatting
  -p, --profile <profile>    #profile name for ask cli
  -h, --help                 #output usage information
```
ask api
-------------
### `ask api`

The api command provides a number of subcommands that enable you to create and modify skills associated with your developer account. There are subcommands for creating and updating the skill, interaction model, and account linking information as well as starting the skill certification process.
```yml

ask api [options] [command]

Commands:

    get-model [options]                            #get an interaction model for skill
    head-model [options]                           #get the ETag associated with an interaction model
    update-model [options]                         #create/update the new interaction model for skill
    create-skill [options]                         #create a skill
    get-skill [options]                            #get a skill
    update-skill [options]                         #update the skill configuration details
    list-skills [options]                          #list skills for a vendor
    get-skill-status [options]                     #get the skill status for a skill
    delete-skill [options]                         #delete skill with given skill Id
    list-vendors [options]                         #get the vendor ID(s)associated with your developer account
    create-account-linking [options]               #create/update account linking configuration for a skill
    get-account-linking [options]                  #get account linking configuration for a skill
    delete-account-linking [options]               #delete account linking configuration for a skill
    submit [options]                               #submit a skill for certification
    withdraw [options]                             #withdraw a skill from the certification process
    simulate-skill [options]                       #simulate a skill
    get-simulation [options]                       #get simulation result
    invoke-skill [options]                         #invoke a skill
    add-private-distribution-account [options]     #grant access to a private skill for the account
    delete-private-distribution-account [options]  #revoke the access to a private skill from an account
    list-private-distribution-accounts [options]   #list all accounts that skill has been privately distributed to
    enable-skill [options]                         #enable a skill
    disable-skill [options]                        #disable a skill
    get-skill-enablement [options]                 #get enablement information for a skill
```
Also see
--------

 * [Getting Started](http://www.docker.io/gettingstarted/) _(docker.io)_
