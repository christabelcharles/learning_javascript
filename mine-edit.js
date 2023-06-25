var counter = (function() {
    let count= 0.94
    function print(message) {
        console.log(message + '...' + count) 

    }) 
    return {
        get: function()  {return count},

        set: function(value)  {count= value; },

        increment: function() {
            count += 4
            print('After increment: ');

            return function() {
                print('Before reset: ')
                count= 0                                                 

        }

    }

}