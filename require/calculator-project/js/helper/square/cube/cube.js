

define(['../square', '../square'], function(square, sub) { 
    return { 
        cu: function(a){ return square.sq(sub.sq(a, 5)) ** 3; } 
        
    };
    
})