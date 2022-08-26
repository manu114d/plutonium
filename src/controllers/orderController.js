const OrderModel= require("../models/orderModel")
const UserModel= require("../models/userModel")
const ProductModel= require("../models/productModel")

const createOrder = async function (req, res) {
        let data=req.body;
        let user=await UserModel.findById(data.userId);
        if(user)
        {
            let product=await ProductModel.findById(data.productId);
            if(product)
            {
                if(req.headers.isfreeappuser=='true')
                {
                    data['amount']=0;
                    data['isFreeAppUser']=req.headers.isfreeappuser;
                    let newData=await OrderModel.create(data);
                    res.send({msg : newData});
                }
                else
                {
                    if(user.balance>=product.price)
                    {
                        await UserModel.findOneAndUpdate(
                            {_id : data.userId},
                            {$set : {balance : user.balance-product.price}}
                        );
                        data['amount']=product.price;
                        data['isFreeAppUser']=req.headers.isfreeappuser;
                        let newData=await OrderModel.create(data);
                        res.send({msg : newData});
                    }
                    else
                    {
                        res.send("Insufficient Balance!")
                    }
                }
            }
            else
            {
                res.send('Invalid ProductID!');
            }
            
        } 
        else
        {
            res.send('Invalid UserID!');
        }
    }

module.exports.createOrder = createOrder

controllers/authorController.js
        deleted:    controllers/bookController.js
        modified:   controllers/userController.js
        modified:   index.js
        modified:   middlewares/commonMiddlewares.js
        deleted:    models/authorModel.js
        deleted:    models/bookModel.js
        modified:   models/userModel.js
        modified:   routes/route.js