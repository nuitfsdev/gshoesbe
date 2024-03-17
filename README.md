**#Link deploy:**  
https://gshoesbe.onrender.com/api/product  
**#Run at local**  
__B1:__ Create a .env file with some environment variables:  
  PORT=3000 // or other port you want  
  MONGODB_URL=mongodb+srv://nuitfsdev:nguyenngocnam@gshoes.09uqd29.mongodb.net/gshoes?retryWrites=true  
__B2:__ Install npm package:  npm install  
__B3:__ Run the project: npm run dev  
__B4:__ Call API by PostMan: http://localhost:3000/api/product  

**#Database**
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


