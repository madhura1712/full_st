var dbobj = {}
dbobj.users = [
    {
        name:'Alvin',
        role:'Admin'
    },
    {
        name:'jon',
        role:'super admin'
    }
]

dbobj.dqquery = {
    find:(table) => {return `Select * from ${table}`},
    insert : (table,dbobj) => {return `Insert into ${table} name,city values(${dbobj.name},${dbobj.city})`}

}
//what is dbobj.dbquery?
//not printing in ncmd
module.exports = dbobj;