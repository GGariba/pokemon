function generateAttacks(selected) {
    var typeSelected = selected.type
    var attacs = []
    for (let i = 0; i < typeSelected.lenght; i++) {
        for (let j = 0; j < moves.lenght; j++) {
            if (typeSelected[i] == moves[j].type) {
                if (selected.base.Attack + 10 > moves[j].power && selected.base.Attack - 10 < moves[j].power) {
                    attacs.push()
                }
            }
        }
    }
}