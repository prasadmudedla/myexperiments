Now that Alexa is multi-lingual, You can use the Alexa Skills Kit to [create skills in multiple languages](https://developer.amazon.com/docs/custom-skills/develop-skills-in-multiple-languages.html#h2-code-changes). Even if you think your content is international and simply needs translation,You might also need to consider creating market-specific content to engage local users fully.And to help you get started faster, here are five tips to help you think through the voice design process and create standout skills for multiple languages.

## 1. Localize your voice user interface (VUI)

  - Built in Slots: The built-in slot types available depend on the language selected for your skill. You should check the [available built-in slots](https://developer.amazon.com/docs/custom-skills/slot-type-reference.html#list-slot-types) for each supported language and update your skills interaction model accordingly.

  - Speechcons: Speechcons are special words and phrases that Alexa pronounces more expressively. You can include these exclamations in your skill's text-to-speech using SSML.This means you can now build Alexa skills that pronounce common words for each language in a more natural manner. You can use regionally specific terms such as “Balle Balle” and “aiyo” in India and “Da lachen ja die Hühner” and “Donnerwetter” in Germany.Check out our full list of speechcons for [UK English](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference-uk) , [German](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference-de) ,[English (India)](https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-india.html), [English (Australia)](https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-australia.html), [Japanese](https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-japanese.html), [English (Canada)](https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-canada.html), [US English](https://developer.amazon.com/docs/custom-skills/speechcon-reference-interjections-english-us.html) .

## 2. Locale detection for Multi-Language Alexa Skill.

Say you're building a audio skill that has several audio files for different languages and you want to serve the audio file based upon the user's locale.
For instance, if your skill supports both German and English (IN), the same code must:

    Take a German request and respond to the user with German Audio file.
    Take an English (IN) request and respond to the user with Hindi audio file.

You can determine the language/locale used to invoke the skill by checking the locale property included in all requests sent to your service (for example, 'LaunchRequest' or 'IntentRequest').

The locale property is part of the request object:

    {
      "request": {
        "type": "LaunchRequest",
        "requestId": "EdwRequestId.00000000-0000-0000-0000-000000000000",
        "timestamp": "2016-06-14T20:59:24Z",
        "locale": "en-US"
      }
    }

You can check this using `this.event.request.locale` 

You can drop the following helper code,to easily provide locale based resources.
```
//Initializing default English language resources
let en = { 
  url: 'https://audio1.maxi80.com',
  startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'
}

//Initializing English India resources
let india = {
  url: 'https://audio1.maxi80.com',
  startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'
}

//Initializing German resources
let de = {
  url: 'https://audio1.maxi80.com',
  startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'
};

//Map the resource data to locale value sent in every Alexa request
let globalResourceData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': india,
    'en-AU': en,
    'de-DE': de
};

function resourceData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) {
        locale = DEFAULT_LOCALE
    };
    return globalResourceData[locale];
}
```

Sample code to test this helper function inside an intent handler
```
let request = this.event.request;
console.log("URL value is "+resourceData(request).url);
```

For a more in-depth look at using locale specific values and leveraging this helper function see [Single Stream Audio Skill](https://github.com/alexa/skill-sample-nodejs-audio-player/blob/mainline/single-stream).
Check out the [audioAssets.js](https://github.com/alexa/skill-sample-nodejs-audio-player/blob/mainline/single-stream/lambda/src/audioAssets.js).

Food for thought

As written this code determines the users locale to fetch the data dynamically.If you are serving resources like images/audio/video files in your skill using AWS S3, It might be a good idea to host these resources on a S3 bucket hosted in AWS region closer to the end user,You can use this code as a starting point and modify as necessary to fetch the S3 url's as per user's locale.Doing so will reduce the latency in serving these static assets.

## 3. Deliver great content
Tailor your content to local needs and tastes. Make your skill content engaging for all the locales you are publishing consider local taste and social norms. 

## 4. Test your localized skill

Make sure you test the skill for the languages you’re targeting. You can use the [Test Simulator (Beta)](https://developer.amazon.com/docs/custom-skills/test-a-custom-skill.html#test-simulator) to test your Alexa skill without owning a device. On the Test page, select the language to test, then enter the utterance to test or provide voice input to test.

## 5. Support international users after launch

At a minimum watch your ratings, reviews to understand what users think of your skill and address any issues you might not have spotted in testing.You can leverage the [Skill Metrics Dashboard to Deepen Skill Engagement, Drive Retention](https://developer.amazon.com/blogs/alexa/post/2b3912a9-c6ec-4642-9c1a-55c42d0f14b6/leverage-the-new-metrics-dashboard-to-deepen-skill-engagement-drive-retention1) across different languages supported by your skill. 


