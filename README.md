###Link deploy:  
https://gshoesbe.onrender.com/api/product
###Run at local  
B1: Create a .env file with some environment variables:  
  PORT=3000 // or other port you want  
  MONGODB_URL=mongodb+srv://nuitfsdev:nguyenngocnam@gshoes.09uqd29.mongodb.net/gshoes?retryWrites=true  
B2: Install npm package:  npm install  
B3: Run the project: npm run dev  
B4: Call API by PostMan: http://localhost:3000/api/product  

###Database
| PRODUCT             |
|---------------------|
| id: Uuid            | 
| name: String        |
| image: String       | 
| description: String | 
| price: Number       |
|---------------------|
| getAllProduct(): Array            | 
| getProductById(): Object          | 
| updateProductById(): Object       | 
| deleteProductById(): Boolean      | 


