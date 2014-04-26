---
layout: blog_post
title: Synonymizer
categories: projects
month: April, 2013
---

####Check it out: [\[*synonym-izer*\]](http://www.synonym-izer.com/)
#####*Takes what you wrote and says the same thing differently*

<p><strong>Built using:</strong>&nbsp;&nbsp;<span title="Node.js" class="pict-prog-nodejs01 fa-2x"> </span>&nbsp;<span title="MongoDB" class="pict-dbs-mongodb fa-2x"> </span>&nbsp;<span title="JavaScript" class="pict-prog-js02 fa-2x"> </span>&nbsp;<span title="JQuery" class="pict-prog-jquery fa-2x"> </span>&nbsp;<span title="HTML5" class="pict-html5-01 fa-2x"> </span>&nbsp;<span title="CSS3" class="pict-css3-01 fa-2x"> </span></p>

This is a program which takes inputted text and substitute words within it for their synonyms.   

I have recently taken a keen interest in web development and am looking to hone my skills in it. I have heard very good things about NodeJS and as such have decided to pursue my interest in it. What particularly appeals to me about node is the simplicity of creating non-blocking code and writing both the front end and back end in JavaScript.    

<!-- abridge -->

###Live Demo:

<object data=http://www.synonym-izer.com width="100%" height="650px"> <embed src=http://www.synonym-izer.com width="100%" height="500px"> </embed> <a href="http://www.synonym-izer.com">www.synonym-izer.com</a> </object>

###How it has been implemented:
- When a user hits the page the data is queried from database and passed to the browser as an array.
- After entering text and once they press the synonymize button, the text is grabbed by JQuery and attempts to be parsed by a natural language parser.
- The api I found for this was limited to < 250 characters so I wrote a simple handler to be dumb if text is longer.
- After parsing the grammar of the text, but before a request processed by the server, the words are compared to the exception list, if the word is in the list, no call to our server is made, saving thesaurus API calls (and server traffic).
- At this point I originally had code to singularize a word prior to querying (later pluralizing the synonym), however it sucked and ruined words, so I took it out.
- The word and it's grammar are passed to the server, which queries the thesaurus API and grabs the response and verifies if there are synonyms in the same grammar context as the word queried, if there are they're returned to the front-end
- Any API calls that we make that result in a 303 or 404 header being returned will have their word added to this exception list (stored in a MongoDB for persistence)
- JQuery then populates the output field with synonmyized words


(Depending how large this exception list gets I may move the exception checking to the server...)

###Thesaurus API
Originally I planned to use the [merriam-webster](http://www.dictionaryapi.com/) dictionary since they have an open API that allows you to query items to their thesaurus and will feed back XML data.   

However, their api limits you to 1000 requests per day and XML is the only return format.

**Instead**, I decided instead to use [Big Huge Labs](http://words.bighugelabs.com/api.php) since they have more return options, including JSON, higher request limit, and retern more verbose responses.

Requests will be sent in the form: http://words.bighugelabs.com/api/{version}/{api key}/{word}/{format}

Responses will have the following relationship types:
- "syn" for synonyms
- "ant" for antonyms
- "rel" for related terms
- "sim" for similar terms
- "usr" for user suggestions

I will be getting JSON format responses parsing for focusing on the "syn" data

Big Huge labs also provides the following HTTP Response Codes:

200 OK: The word was found and the results are in the body.
303 {alternate}: The original word was not found but an alternative has been. The alternative is the HTTP response message. For example, a request for "reminding" returns 303 remind. The Location header contains the URL for the API request for "remind."
404 Not Found: No data could be found for the word or alternates.
500 Usage Exceeded: Usage limits have been exceeded.
500 Inactive key: The key is not active.


After some testing I noticed that there were a lot of 303 messages returned, that would re-direct us to an un-related synonym, and 404, indicating that the word we were looking for did not have any data. I decided to then create a back end database to store these exceptions in order to minimize the number of API calls we made, and also to speed up the event loop.


###Progress so far:

- Find Thesaurus API *done*
- Set up HTML UI, with text box on left, button in middle, output on right *done*
- Use JQuery to register event listeners *done*
- Use JQuery to modify paragraph on right hand side so that it mirrors text in box *done*
- Basic request for synonyms *done*
- Pass data from web application to server and get response back *done*
- Modify the output field on the right with synonymized data *done*
- Implement natural language recognition and replace words with valid synonymz (verb, noun, adjective) (currently just replace with whichever has data(stupid)) *doneish*
- Add node package natural, change words to singular when querying synonyms, then pluralize when passing back to UI *reverted*


##### Give me a shout!

<div>
<p>If you have any suggestions please feel free to pass them along: <a href="mailto:martin@mgingras.ca?Subject=Synonymizer%20Suggestion" title="Email Me!">martin@mgingras.ca</a></p>
</div>

See the [code](http://github.com/mgingras/synonymizer) - Check out [http://www.synonym-izer.com/](http://www.synonym-izer.com/)
