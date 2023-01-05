let express = require('express');
let router = express.Router();
const mainController = require('../controllers/mainController');
const multer = require ('multer');
const path = require ('path');

const storage = multer.diskStorage({ 
    destination: (req, file,cb)=>{
        cb(null, path.join(__dirname, '../../public/images/imgBanner'))
    },
    filename: (req, file,cb)=>{
        console.log(file)
        const newFileName = 'Banner' +  Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    } 
  });

const upload = multer({storage});

router.get('/', mainController.main);





module.exports = router;


