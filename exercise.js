//in my opinion, despite not knowing some stuff, I used too many hints
function Stopwatch(){
    let startTime, endTime = 0;
    let runner = {time : 0};
    let on = false;

    this.start = function(){
        if (on !== false){
            throw new Error('Stopwatch on');
        }
        on = true;
        startTime = new Date; //creates a new Date object with stamp from computer
    }

    this.stop = function(){
        if (on !== true){
            throw new Error('Stopwatch off');
        }
        on = false;
        endTime = new Date;
        runner.time = runner.time + (endTime.getTime() - startTime.getTime())/1000;
        //getTime() returns a Date object in milliseconds
    }

    this.reset = function(){
        if (on !== false){
            throw new Error('Stopwatch on');
        }
        runner.time = 0;

    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return runner.time;
        }
    })
}