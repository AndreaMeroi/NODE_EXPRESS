Esercizio/1
Creare  le rotte necessario per l'entità post all'interno di server.js e creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio: 

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…



Nota:

Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json

Buon divertimento e buon weekend! Confermate lettura come al solito :babyyoda:

Esercizio/2

> Ciao Classe!,
> esercizio di oggi: **express-blog-routing**
> (stessa repo)
> repo: `express-blog-routing`
> 
> ### Esercizio
> 
> Creare un file di routing (`routers/posts.js`) che conterrà le rotte necessario per l'entità `post`.
> 
> All'interno creare le rotte per le operazioni CRUD (*Index, Show, Create, Update e Delete)*
> 
> Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
> 
> Ad esempio: 
> 
> Se viene chiamata `/posts` col verbo `GET` ci aspettiamo “Lista dei post”;
> 
> Se viene chiamato `/posts/1` col verbo `DELETE` ci aspettiamo “Cancellazione del post 1”
> 
> e via dicendo…  
> 
> Registrare il router dentro `app.js` con il prefisso `posts/`.
> 
> **Nota:**
> 
> Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
> Ci servirà per i prossimi step.
> Per oggi vi può servire in caso vogliate provare i bonus.
> 
> ### Bonus
> 
> - Provare a restituire la lista dei post dalla rotta *index*, in formato `json`
> - Provare a restituire un singolo post dalla rotta *show,* sempre in formato `json`
> 
> Confermate lettura come al solito e buon divertimento <:babyyoda:1374696912799924234> 
>

Io sono a disposizione in support via ticket o tramite invocazione jedi! 💪

<@&1337133589195657319>

> 
> Ciao classe,
> esercizio di oggi: Express Blog - API CRUD (parte 2)
> 
> repo: `express-blog-api-crud`
> 
> ### Esercizio
> 
> **Milestone 1**
> 
> Per iniziare, andiamo su Postman e prepariamo una nuova chiamata verso la nostra rotta store. 
> 
> - Impostiamo il verbo e l’endpoint corretti
> - Selezioniamo il tab body e scegliamo il formato raw e JSON
> - Inseriamo come corpo della nostra request un oggetto che rappresenti un nuovo post
> 
> *Nota: se vogliamo avere delle immagini, inventiamole pure.* 
> 
> *Nota: ricordiamo che non bisogna passare l’id quando si crea una nuova risorsa: sarà il server (con l’aiuto del database) a fornirlo.*
> 
> **Milestone 2**
> 
> Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.
> 
> Poi, all’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un `console.log` 
> 
> **Milestone 3**
> 
> Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
> 
> Testiamolo con postman.
> 
> **Milestone 4**
> 
> Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse. 
> 
> ### Bonus
> 
> - Quelli del giorno prima, se non già fatti
> - In Update, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
> 
> Confermate lettura come al solito  e buon divertimento <:babyyoda:1374696912799924234> 
>