function Aggiungi_ElementoLista(){
    if(document.getElementById('input_voce_lista').value == ""){
        alert("Inserisci qualcosa da fare!");        
    }
    else{
        //  ACCEDO ALL'INPUT DI TESTO E MI PRENDO IL CONTENUTO SCRITTO DENTRO
        let input_di_testo = document.getElementById('input_voce_lista');
        let testo_elem_lista = input_di_testo.value;
        //console.log('Nodo: ', input_di_testo);
        //console.log('Valore_Nodo: ', testo_elem_lista);

        //  MI CALCOLO IL NUMERO DI ELEMENTI NELLA LISTA, PONENDOLI IN UN VETTORE
        let array_lista = document.getElementsByTagName('li');
        let num_elementi = array_lista.length;
        //console.log(array_lista);
        //console.log(num_elementi);

        //  METODO 1
        //  CREO UN NUOVO ELEMENTO LISTA 
        let elemento_lista = document.createElement('li');
        //  CREO L'INDICE DELL'ELEMENTO IN MODO CHE INDICHI CHE L'ELEMENTO E' IN ULTIMA POSIZIONE
        let id_elemento_lista = 'elemento_n' + (num_elementi+1);
        //  SETTO GLI ATTRIBUTI UTILI
        let classe = 'col-12 d-flex justify-content-between classe_';
        if(((num_elementi+1)%2) == 0){
            classe = classe + 'pari';
        }
        else{
            classe = classe + 'dispari';
        }
        elemento_lista.setAttribute('id', id_elemento_lista);
        elemento_lista.setAttribute('class', classe);
        //  AGGIUNGO L'ELEMENTO LISTA ALLA LISTA UL
        document.getElementById('lista').appendChild(elemento_lista);
        //  AGGIUNGO IL CONTENITORE SPAN DEL TESTO
        aggiungi_SpazioTesto(id_elemento_lista, testo_elem_lista);
        //  AGGIUNGO IL BOTTONE X ALL'ELEMENTO LI, PONEDOLO DOPO IL TESTO
        aggiungi_RemoveButton(id_elemento_lista);

        //  METODO 2
        /*let id_elemento_lista = 'elemento_n' + (num_elementi+1);
        let elemento = "<li id='" + id_elemento_lista + "'>" + testo_elem_lista + "</li>";
        document.getElementById('lista').innerHTML += elemento;*/

        document.getElementById('input_voce_lista').value = '';
    }    
}


function aggiungi_SpazioTesto(id_elemento_lista, testo){
    let span_testo = document.createElement('span');
    let id_span_testo = 'testo_' + id_elemento_lista;
    span_testo.setAttribute('id', id_span_testo);
    span_testo.setAttribute('class', 'style_Text');
    span_testo.setAttribute('onclick', 'Sbarramento(this.id)');
    span_testo.innerHTML = testo;
    document.getElementById(id_elemento_lista).appendChild(span_testo);
}


function aggiungi_RemoveButton(id_elemento_lista){
    let bottoneX = document.createElement('input');
    bottoneX.setAttribute('type', 'button');
    bottoneX.setAttribute('value', 'DEL');
    bottoneX.setAttribute('class', 'btn_style');
    let valore_onclick = "cancella_Elemento('" + id_elemento_lista + "')";
    bottoneX.setAttribute('onclick', valore_onclick);
    console.log(id_elemento_lista);
    console.log(bottoneX);
    document.getElementById(id_elemento_lista).appendChild(bottoneX);
}


function cancella_Elemento(id_elemento_lista){
    document.getElementById(id_elemento_lista).remove();
    Aggiorna_Indici_Lista(id_elemento_lista);    
}


function Sbarramento(id_span_testo){
    let span_testo = document.getElementById(id_span_testo);
    span_testo.classList.toggle('testo_sbarrato');
}


function Aggiorna_Indici_Lista(id_elemento_eliminato){
    let pos_elemento_eliminato = parseInt(id_elemento_eliminato.substring((id_elemento_eliminato.length-1), 
        id_elemento_eliminato.length));

    let array_elementi_lista = document.getElementsByTagName('li');
    
    for(const elem_lista of array_elementi_lista){
        id_elemento_ciclato = elem_lista.getAttribute('id');

        let pos_elemento_ciclato = parseInt(id_elemento_ciclato.substring((id_elemento_ciclato.length-1), 
            id_elemento_ciclato.length));

        if(pos_elemento_ciclato > pos_elemento_eliminato){
            id_aggiornato = "elemento_n" + (pos_elemento_ciclato-1);
            elem_lista.setAttribute('id', id_aggiornato);
        }
    }
}
