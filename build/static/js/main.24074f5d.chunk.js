(this["webpackJsonpgame-jam-2019"]=this["webpackJsonpgame-jam-2019"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),n=a(20),l=a.n(n),r=(a(28),a(29),a(30),a(4)),o=a(5),c=a(7),p=a(6),m=a(8),h=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log("test"),i.a.createElement("div",{className:"add-grid"},i.a.createElement("div",{className:"add-player1"},i.a.createElement("img",{src:"adp1.png",alt:"player 1"})),i.a.createElement("div",{className:"add-bloc"},i.a.createElement("img",{src:"battlemail005.png",alt:"Game logo"}),i.a.createElement("h1",null,"Demolish your friend in fierce E-Mail melee!"),i.a.createElement("h3",null,"Get ready to"),i.a.createElement("h2",null,"hit | block | gather | gear up | steal | quest | eat"),i.a.createElement("h2",null,"Enter P1 E-Mail | Enter P2 E-Mail")),i.a.createElement("div",{className:"add-player2"},i.a.createElement("img",{src:"adp2.png",alt:"player 2"})))}}]),t}(s.Component)),d=a(14),u=a(10),g=a(12),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t;e=(t=this.props.data.health)>=8?4:t>=6?3:t>=4?2:t>=2?1:0;var a=Math.floor(this.props.data.health/2),s=this.props.data.health%2;return i.a.createElement("div",{className:"player1-div"},i.a.createElement("div",{className:"player1-status"},i.a.createElement("div",{className:"player1-health"},i.a.createElement("h2",null,"Health"),i.a.createElement("p",null,Array(a).fill(i.a.createElement("img",{src:"/heart.png",alt:"Heart"})),Array(s).fill(i.a.createElement("img",{src:"/halfheart.png",alt:"Half Heart"})))),i.a.createElement("div",{className:"player1-gold"},i.a.createElement("h2",null,"Gold"),i.a.createElement("p",null,Array(this.props.data.gold).fill(i.a.createElement("img",{src:"/firecoin.png",alt:"Gold coin"}))))),i.a.createElement("div",{className:"player1-image"},i.a.createElement("img",{src:"/images/Player1/Player1_"+this.props.data.armor+"_"+this.props.data.weapon+"_"+e+".png",alt:"Char"})),i.a.createElement("div",{className:"player1-actions"},i.a.createElement("div",{className:"player1-bubble"},0===this.props.data.action&&0===this.props.showSnippet&&i.a.createElement("p",null,"..."),1===this.props.data.action&&i.a.createElement("p",null,"READY"),1===this.props.showSnippet&&i.a.createElement("p",null,this.props.data.snippet))))}}]),t}(s.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t;e=(t=this.props.data.health)>=8?4:t>=6?3:t>=4?2:t>=2?1:0;var a=Math.floor(this.props.data.health/2),s=this.props.data.health%2;return i.a.createElement("div",{className:"player2-div"},i.a.createElement("div",{className:"player2-actions"},i.a.createElement("div",{className:"player2-bubble"},0===this.props.data.action&&0===this.props.showSnippet&&i.a.createElement("p",null,"..."),1===this.props.data.action&&i.a.createElement("p",null,"READY"),1===this.props.showSnippet&&i.a.createElement("p",null,this.props.data.snippet))),i.a.createElement("div",{className:"player2-image"},i.a.createElement("img",{src:"/images/Player2/Player2_"+this.props.data.armor+"_"+this.props.data.weapon+"_"+e+".png",alt:""})),i.a.createElement("div",{className:"player2-status"},i.a.createElement("div",{className:"player2-health"},i.a.createElement("h2",null,"Health"),i.a.createElement("p",null,Array(a).fill(i.a.createElement("img",{src:"/heart.png",alt:"Heart"})),Array(s).fill(i.a.createElement("img",{src:"/halfheart.png",alt:"Half Heart"})))),i.a.createElement("div",{className:"player2-gold"},i.a.createElement("h2",null,"Gold"),i.a.createElement("p",null,Array(this.props.data.gold).fill(i.a.createElement("img",{src:"/firecoin.png",alt:"Gold coin"}))))))}}]),t}(s.Component),w=(a(32),[{question:"Send the last word in the Bible",answers:["Amen"],difficulty:1,isAsked:0},{question:"Send the first paragraph of the Communist Manifesto",answers:["A spectre is haunting Europe \u2013 the spectre of communism.All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police - spies."],difficulty:3,isAsked:0},{question:"RIDDLE: What belongs to you, but other people use it more than you?",answers:["your name","my name","name"],difficulty:3,isAsked:0},{question:"Re-arrange the letters, O O U S W T D N E J R, to spell just one word.What is it ?",answers:["just one word"],difficulty:3,isAsked:0},{question:"Send the answer to life the universe and everything",answers:["42"],difficulty:2,isAsked:0},{question:"What is coarse and rough and irritating and gets everywhere?",answers:["sand"],difficulty:3,isAsked:0},{question:"Send 20\u20ac to PayPal account joonas.suonpera@gmail.com",answers:["-"],difficulty:3,isAsked:0},{question:"Does Finland exist?",answers:["no"],difficulty:2,isAsked:0},{question:"Press F to pay respects",answers:["f"],difficulty:1,isAsked:0},{question:"What is Gimli\xb4s first line in LOTR?",answers:["What are we waiting for?"],difficulty:3,isAsked:0},{question:'What 3 positive numbers give the same result when multiplied together as when added together? For example "775, 226, 301"',answers:["1, 2, 3"],difficulty:2,isAsked:0},{question:"Which social virtual chat game by a Finnish company surpassed 200 million registered avatars in 2011?",answers:["habbo hotel"],difficulty:2,isAsked:0},{question:"What year was Elon Musk born in?",answers:["1971"],difficulty:2,isAsked:0},{question:"In The Legend of Zelda video game series, what is the hero\xb4s default name?",answers:["Link"],difficulty:1,isAsked:0},{question:'What are the names of the ghosts who chase Pac Man and Ms.Pac Man? For example, "a, b, c, d"',answers:["Inky, Blinky, Pinky, Clyde"],difficulty:3,isAsked:0},{question:"Who was the captain of the Enterprise in the pilot episode of Star Trek?",answers:["Captain Pike","Pike"],difficulty:2,isAsked:0},{question:"In star wars, who shot first?",answers:["Han","Solo","Han Solo"],difficulty:1,isAsked:0},{question:"Which video game studio created the popular online game Fortnite?",answers:["Epic Games"],difficulty:1,isAsked:0},{question:"The first person shooter video game Doom was first released in what year?",answers:["1993"],difficulty:1,isAsked:0},{question:"What is the birth name of Superman?",answers:["Kal-el"],difficulty:3,isAsked:0},{question:"Who was the first actor to portray James Bond on screen?",answers:["Barry Nelson"],difficulty:2,isAsked:0},{question:"What is the name of the first Harry Potter book?",answers:["Philosophers stone","Harry Potter and the philosophers stone","Philosopher\xb4s stone","Harry Potter and the philosopher\xb4s stone"],difficulty:1,isAsked:0},{question:"Which TV character said, \u201cLive long and prosper\u201d?",answers:["Spock","Mr. Spock","Mister Spock"],difficulty:1,isAsked:0},{question:"What is the name of Batman\u2019s butler?",answers:["Alfred Pennyworth","Alfred","Pennyworth"],difficulty:1,isAsked:0},{question:"Hg is the chemical symbol of which element?",answers:["Mercury"],difficulty:2,isAsked:0},{question:"In Greek mythology, how many graces are there?",answers:["3","three"],difficulty:3,isAsked:0},{question:"Who was US president during World War I?",answers:["Woodrow Wilson"],difficulty:3,isAsked:0},{question:"What does the H stand for in the medical abbreviation ADHD?",answers:["Hyperactive"],difficulty:1,isAsked:0},{question:"The only known monotremes in the animal kingdom are the echidna and which other creature?",answers:["platypus"],difficulty:3,isAsked:0},{question:"What was the first animal to circle the moon?",answers:["Tortoise"],difficulty:3,isAsked:0},{question:'Which Google product includes a nod to Sci - Fi classic "The Hitchhiker\xb4s Guide To The Galaxy"?',answers:["Chromecast"],difficulty:2,isAsked:0},{question:"Where did IBM\u2019s super computer Watson learn to swear?",answers:["Urban Dictionary"],difficulty:2,isAsked:0},{question:'What dinosaur name means "fast thief?"',answers:["Velociraptor"],difficulty:2,isAsked:0},{question:"-4x ^ 2 + 12 = 8 / x What is the minimum solution for x?",answers:["-2"],difficulty:3,isAsked:0},{question:"Solve this captcha https://www.flickr.com/photos/mat-/4892324133",answers:["Nepridumannoe, hadelp"],difficulty:3,isAsked:0}]),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={startDate:"",player1Mail:"otto.maenpaa@gmail.com",player2Mail:"joonas.suonpera@gmail.com",player1Message:{},player2Message:{},counter:60,player1:{snippet:"",action:0,responseTime:0,health:10,gold:2,damage:2,armor:0,weapon:0,block:0},player2:{snippet:"",action:0,responseTime:0,health:10,gold:2,damage:2,armor:0,weapon:0,block:0},showSnippet:0,question:w[31]},a.getPageOfMessages=a.getPageOfMessages.bind(Object(g.a)(a)),a.handleMessage=a.handleMessage.bind(Object(g.a)(a)),a.updateQuestion=a.updateQuestion.bind(Object(g.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("player1input").style.display="none",document.getElementById("player2input").style.display="none",this.setState({startDate:(new Date).getTime()});var t=0;setInterval((function(){e.getPageOfMessages(),console.log(e.state.player1Message,e.state.player2Message)}),2e3),setInterval((function(){e.setState({counter:Math.max(e.state.counter-1,0)}),0===e.state.counter&&0===t&&(e.setState({showSnippet:1}),t=1,setTimeout((function(){t=0,e.playRound()}),3e3))}),1e3)}},{key:"playerAction",value:function(e,t){var a,s;if(1===e?(a=this.state.player1,s=this.state.player2):(a=this.state.player2,s=this.state.player1),(t=t.toLowerCase().trim()).includes("hit"))a.snippet="HIT",s.block?(Math.random()>.5&&(s.health=Math.max(0,s.health-a.damage)),s.block=0):(s.health=Math.max(0,s.health-a.damage),0===s.health&&this.props.history.push({pathname:"/win",state:{winner:e}}));else if(t.includes("gather"))a.snippet="GATHER",a.gold+=2;else if(t.includes("steal"))a.snippet="STEAL",s.gold>=1&&(s.gold--,a.gold++);else if(t.includes("weapon"))a.snippet="BUY WEAPON",a.gold>=5&&(a.gold-=5,a.damage+=2,a.weapon=1);else if(t.includes("armor"))a.snippet="BUY ARMOR",a.gold>=5&&(a.gold-=5,a.health+=10,a.armor=1);else if(t.includes("eat"))a.snippet="EAT",a.gold>=1&&(a.gold--,a.health+=2);else if(t.includes("block"))a.snippet="BLOCK",a.block=1;else{var i;for(a.snippet="QUEST",i=0;i<this.state.question.answers.length;i++)if(console.log(t,this.state.question.answers[i].toLowerCase()),t.includes(this.state.question.answers[i].toLowerCase())){a.gold+=2*this.state.question.difficulty,this.updateQuestion();break}}this.updateState(e,a,s)}},{key:"updateQuestion",value:function(){this.setState({question:w[Math.floor(35*Math.random())]})}},{key:"updateState",value:function(e,t,a){1===e?this.setState({player1:t,player2:a}):2===e&&this.setState({player1:a,player2:t})}},{key:"playRound",value:function(){var e=this,t=this.state.player1.action,a=this.state.player2.action,s=this.state.player1Message.snippet,i=this.state.player2Message.snippet;0===t&&0===a||(0===t?this.playerAction(2,i):0===a?this.playerAction(1,s):this.state.player2.responseTime>this.state.player1.responseTime?(this.playerAction(1,s),this.playerAction(2,i)):(this.playerAction(2,i),this.playerAction(1,s)));var n=this.state.player1,l=this.state.player2;n.action=0,n.responseTime=0,l.action=0,l.responseTime=0,this.setState({player1:n,player2:l,counter:60,showSnippet:1}),setTimeout((function(){n.snippet="",l.snippet="",e.setState({player1:n,player2:l,showSnippet:0})}),4e3)}},{key:"handleMessage",value:function(e){if(!(e.date<this.state.startDate)){if(e.email===this.props.emails.player1&&(this.state.player1Message.date<e.date||void 0===this.state.player1Message.date)){var t=this.state.player1;t.action=1,t.responseTime=(new Date).getTime(),this.setState({player1Action:t}),this.setState({player1Message:e}),1===this.state.player1.action&&1===this.state.player2.action&&this.playRound()}if(e.email===this.props.emails.player2&&(this.state.player2Message.date<e.date||void 0===this.state.player2Message.date)){var a=this.state.player2;a.action=1,a.responseTime=(new Date).getTime(),this.setState({player2Action:a}),this.setState({player2Message:e}),1===this.state.player1.action&&1===this.state.player2.action&&this.playRound()}}}},{key:"getPageOfMessages",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,s=[],i=window.gapi.client.gmail.users.messages.list({userId:"me",labelIds:"INBOX",maxResults:a});i.execute((function(e){if(e.messages){e.messages.length;e.messages.forEach((function(e,a){s.push(e),window.gapi.client.gmail.users.messages.get({userId:"me",id:e.id}).execute((function(e){for(var a,s,i,n,l=0;l<e.payload.headers.length;l++){var r=e.payload.headers[l];s=(s=e.snippet).split("&")[0],i=e.id,"From"===r.name?a=r.value.substring(r.value.lastIndexOf("<")+1,r.value.lastIndexOf(">")):"Date"===r.name&&(n=new Date(r.value).getTime())}t.handleMessage({id:i,email:a,snippet:s,date:n}),1}))}))}}))}},{key:"render",value:function(){var e=this.state.question;return i.a.createElement("div",null,i.a.createElement("img",{id:"game-logo",src:"/battlemail005.png",alt:"logo"}),i.a.createElement("p",{className:"host-email"},"junction2019gamejam@gmail.com"),i.a.createElement("div",{className:"game-container"},i.a.createElement("div",{className:"player1-container"},i.a.createElement(y,{data:this.state.player1,showSnippet:this.state.showSnippet,snippet:this.state.player1Message.snippet})),i.a.createElement("div",{className:"global-tasks"},i.a.createElement("span",null,this.state.counter),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"hit"')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"gather"')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"steal"')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"block"')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"eat" (1g)')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"weapon" (5g)')),i.a.createElement("p",null,i.a.createElement("img",{className:"move-icon",src:"../heart.png",alt:"attack"}),i.a.createElement("div",{className:"move-description"},'"armor" (5g)'))),i.a.createElement("div",{className:"player2-container"},i.a.createElement(f,{data:this.state.player2,showSnippet:this.state.showSnippet,snippet:this.state.player2Message.snippet}))),i.a.createElement("p",{id:"test-p"},e.question))}}]),t}(s.Component),v=(a(33),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={p1med:"p1winDown.png",p2med:"p2loseLeft.png"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.changePictures.bind(this),500),console.log(this.props.location.state.winner)}},{key:"changePictures",value:function(){"p1winDown.png"===this.state.p1med?this.setState({p1med:"p1winUp.png",p2med:"p2loseRight.png"}):this.setState({p1med:"p1winDown.png",p2med:"p2loseLeft.png"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"win-grid"},i.a.createElement("div",{className:"grid-header"},i.a.createElement("img",{src:"battlemail005.png",alt:"Game logo"}),i.a.createElement("h1",null,"Player X Wins!")),i.a.createElement("div",{className:"grid-p1"},i.a.createElement("img",{src:"/"+this.state.p1med,alt:"player 1",width:"500",height:"600"})),i.a.createElement("div",{className:"grid-p2"},i.a.createElement("img",{src:"/"+this.state.p2med,alt:"player 2",width:"500",height:"600"})))}}]),t}(s.Component)),k="133675380584-86ac3ndr5m7il6b79l5lqr5jitc8g6a1.apps.googleusercontent.com",b="AIzaSyC86syVDiTJq6RTioJoXeEb17biIE0meXc",A="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send",N=["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];var M=function(){var e=setTimeout((function(){window.gapi?window.gapi.load("client:auth2",t):e()}),100);function t(){window.gapi.client.init({apiKey:b,discoveryDocs:N,clientId:k,scope:A})}return i.a.createElement("div",{className:"App"},window.gapi&&i.a.createElement("div",null,i.a.createElement("div",{className:"authorize-button",onClick:function(){return console.log(window.gapi),void window.gapi.auth2.getAuthInstance().signIn()}}),i.a.createElement(d.a,null,i.a.createElement("div",{className:"main-container"},i.a.createElement(u.a,{exact:!0,path:"/",component:h}),i.a.createElement(u.a,{path:"/game",render:function(e){return i.a.createElement(E,Object.assign({emails:{player1:document.getElementById("player1input").value,player2:document.getElementById("player2input").value}},e))}}),i.a.createElement(u.a,{exact:!0,path:"/win",component:v}),i.a.createElement("div",{className:"input-fields"},i.a.createElement("div",null,i.a.createElement("input",{type:"email",id:"player1input",placeholder:"Player 1 email"})),i.a.createElement("div",null,i.a.createElement("input",{type:"email",id:"player2input",placeholder:"Player 2 email"}))),i.a.createElement(d.b,{to:"/game"},"Start New Game!"),i.a.createElement(d.b,{to:"/win"},"End the game!")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.24074f5d.chunk.js.map