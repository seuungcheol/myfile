function Room(roomName, desc, id, e, w, s, n, u, d) {
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.e = e;
    this.w = w;
    this.s = s;
    this.n = n;
    this.u = u;
    this.d = d;

    this.displayRoomInfo = function() {
        tv("["+this.roomName+"]\n");
        tv(this.desc+"\n");
        tv(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function() {
        var enters = "출구:[";
        if(e != 0){
            enters = enters + "동";
        } if(w != 0){
            enters = enters + "서";
        } if(s != 0){
            enters = enters + "남";
        } if(n != 0){
            enters = enters + "북";
        } if(u != 0){
            enters = enters + "위";
        } if(d != 0){
            enters = enters + "밑";
        }
        enters = enters + "]";
        return enters;
    }

}