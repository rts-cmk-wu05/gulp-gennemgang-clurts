# Gemme data lokalt i cookies og localstorage/sessionstorage

cookies såvel som local/sessionstorage gemmer data lokalt på computeren

Det er forskelligt fra browser til browser hvordan det er implementeret

## Cookies

må højest fylde 4kb
et sites cookies medsendes til serveren ved hvert eneste http-request

web server kan ikke huske 
web server lukker forbindelsen når den er færdig med at behandle http-request
cookies medsendes for at identificere klienten overfor serveren... 

cookies bliver som default slettet ved hver session, men man kan definere hvor længe cookien skal være aktiv...

## session-storage og localstorage

blev implementeret i html5

Data medsendes ikke autmatisk, men kun i det omfang vi vælger det... 


sessionstorage: 5mb
sessionstorage slettes når brugern lukker browserfanen.


localstorage: 10mb
localstorage slettes "aldrig" - kun når vi som udvikler vælger det, eller når brugeren rydder cachen, eller har valgt at data fra website skal slettes



# Må man det?

udveksler data med 3. part!!! = indhente tilladelse! 