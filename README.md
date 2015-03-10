# sassaparilla
This is a Meteor version of the responsive web site starter kit : [Sassaparilla ](https://github.com/fffunction/sassaparilla/blob/master/README.md#sassaparilla)

The main advantage of Sassaparilla is that you get a professionally developed responsive web site as your starting point.  Since it uses SASS and Compass from the get go, you start from a readily adaptable platform that uses best practice patterns.

I have rearranged it so that it fits with the "automatic" features of Meteor, eg. images in _public_ directory, header and footer as templates, etc.

### Installation

 1. git clone [git@github.com:martinhbramwell/sassaparilla.git](git@github.com:martinhbramwell/sassaparilla.git)
 2. cd sassaparilla
 3. EITHER : meteor

    OR : edit the MONGO_URL in _qrun.sh_ to point to your neighbourhood Mongo database you wanto use and then run _./qrun.sh_  (if you don't want to lose 100s of MBs for an empty Mongo database)

 4. Open the URL  http://localhost:3000/demo.html

 **URGENT NOTE** : You **will** get a missing file error the first time you run it with Meteor.  Just cancel with <ctrl-c> and try again.
 
 (Can anyone tell me how to fix that?)
 
### Usage

The main switch box is `both/routing/main.routing.js`.

You can turn demo mode _on_ or _off_ with 0 or 1 in the line 

    //  Turn demo mode on or off with 1 or 0 here ...
    var DEMO = 1;

There are actually __three__ versions of the main page: the one at `/index.html` when demo mode is _off_, and the two you reach from the `/index.html` when demo mode is _on_.

You can find them at :

1. `client/root/body/landing.html`
1. `client/root/demo/extended_demo.html`
1. `client/sassaparilla/demo/demo.html`

With demo mode turned off, you can safely delete the two demo directories:

    rm -fr client/root/demo
    rm -fr client/sassaparilla/demo 

