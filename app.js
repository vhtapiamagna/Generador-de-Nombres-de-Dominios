



for (var pronoun of [
    'the',
    'my',
    'your',
    'our',

] ) {
    for(var adj of [
        'red',
        'small',
        'big',
        'ugly',
        'bad',
        'happy',

    ]){
        for(var noun of [
            'house',
            'bridge',
            'plane',
            'strawbeery',
            'table',
        ] ){
            for (var domain of [
                '.com',
                '.net',
                '.org',
                '.cl',
                '.gov',
            ]){
               
               
               
                console.log(pronoun + " " + adj + " " + noun + domain);
            }

            
        }
    }
}

