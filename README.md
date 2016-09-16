# sequelize-todos-1
Untuk tahapan pertama adalah
1. npm init
2. npm install (membuat node_modules)
3. npm install -g sequelize-cli
4. sequelize init
5. sequelize model:create --name todos --attributes first_name:string,last_name:string,bio:text
6. lalu revisi attributes jadi name, dan complete
7. sequelize db:migrate
8. cek tabel di pgAdmin3
9. jangan lupa di pgAdmin3 buat database tododb
10. sequelize seed:create --name entry-todos
contoh di seeders
name: 'Bake a delicious blueberry-glazed cheescake',
complete: false,
createdAt: new Date(),
updatedAt: new Date()
//berhubung tidak bisa maka tadi dibuatkan oleh Pak Ruby
11. buatkan help, lalu list, add, delete, complete
