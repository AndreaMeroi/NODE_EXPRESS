Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che 
impareremo. 

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un 
array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman

Confermate lettura come al solito e buon divertimento! :babyyoda: 


> <@&1337133589195657319>
> 
> 
> Ciao Classe,
> esercizio di oggi: Express Blog - API CRUD (parte 1)
> 
> repo: `express-blog-api-crud`
> 
> ### Esercizio
> 
> **Milestone 1**
> 
> Come prima cosa, creiamo un controller per i nostri post, in una cartella `controllers.` 
> 
> All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi). 
> 
> Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.
> 
> Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima. 
> 
> Se tutto funziona, passiamo alla prossima milestone
> 
> **Milestone 2**
> 
> Per iniziare, creiamo una cartella `data`  in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato.  Importiamo questo file in cima al controller. 
> 
> Ora passiamo ad implementare le logiche delle nostre CRUD:
> 
> - Index dovrà restituire la lista dei post in formato JSON
> - Show dovrà restituire un singolo post in formato JSON
> - Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (`console.log`) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.
> 
> ### Bonus
> 
> - Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
> - In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
> 
> Buon Lavoro e buon divertimento
>