
import GremlinClient from './application/gremlinclient.js';


const gc: GremlinClient = new GremlinClient();
gc.start();

//(3/10/22) the party bouncer has to get the user's name (or be told the user is anonymous)
const partyBouncer: HTMLDivElement = <HTMLDivElement>document.getElementById('partybouncer');
const inpForm: HTMLFormElement = <HTMLFormElement>document.getElementById('name-form');
const inpFormVal: HTMLInputElement = <HTMLInputElement>document.getElementById('textbox');
const anonButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('anon-button');

function submitGremlinName(e: SubmitEvent) {
    e.preventDefault();
    createGremlinCanvasHTML();
    const name: string = inpFormVal.value;
    if (name == 'freg') {
        gc.receiveIDFromUser('freg', true);
    }
    else {

        gc.receiveIDFromUser(name, false);
    }
}

function goAnon(e: MouseEvent) {
    e.preventDefault();
    createGremlinCanvasHTML();
    gc.receiveIDFromUser('anon', false);
}

//(3/15/22) this function now also controls the release/patch version. remember to sync it with github releases!
function createGremlinCanvasHTML() {
    partyBouncer.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'gremlin-canvas';
    canvas.width = 1366;
    canvas.height = 768;
    document.body.append(canvas);

    const footer = document.createElement('footer');
    footer.id = 'gremlin-footer';
    const gremlinVersion = document.createElement('p');
    gremlinVersion.id = 'gremlin-version';

    //******-----------ATTENTION-----------******
    //THIS WHAT YOU WANT TO EDIT EVERY RELEASE
    gremlinVersion.textContent = 'gremlin party pre-alpha-v0.0.4 (latest build: March 19th, 2022)';
    //LOOK HERE
    //******-----------ATTENTION-----------******

    const patchNotes = document.createElement('a');
    patchNotes.textContent = 'patch notes';
    patchNotes.id = 'gremlin-notes';
    patchNotes.target = '_blank';

    //*** --- don't forget to add a release on the github repo when you edit the version lole --- ***
    patchNotes.href = 'https://github.com/martiangremlin/gremlinparty/releases';
    //*** --- this line above me right here --- ***


    const twitter = document.createElement('a');
    twitter.textContent = 'twitter';
    twitter.id = 'gremlin-twitter';
    twitter.target = '_blank';
    twitter.href = 'https://twitter.com/thegremlinparty';

    footer.appendChild(gremlinVersion);
    footer.appendChild(patchNotes);
    footer.appendChild(twitter);
    document.body.append(footer);
}

inpForm.onsubmit = submitGremlinName;
anonButton.onclick = goAnon;

//end of party bouncer code, GremlinClient takes control from here
