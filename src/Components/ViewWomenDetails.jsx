import React, { useState,useEffect } from 'react';
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.webp'
import img20 from'../assets/images/20.jpg'
import img22 from'../assets/images/22.jpg'
import img24 from'../assets/images/24.jpg'
import img23 from'../assets/images/23.jpg'
import img30 from'../assets/images/30.jpg'
import img31 from'../assets/images/31.jpg'
import img32 from'../assets/images/32.jpg'
import img33 from'../assets/images/33.jpg'
import img40 from'../assets/images/40.jpg'
import img41 from'../assets/images/41.jpg'
import img42 from'../assets/images/42.jpg'
import img43 from'../assets/images/43.jpg'
import img50 from'../assets/images/50.jpg'
import img51 from'../assets/images/51.jpg'
import img52 from'../assets/images/52.jpg'
import img53 from'../assets/images/53.jpg'
import img60 from'../assets/images/60.jpg'
import img61 from'../assets/images/61.jpg'
import img62 from'../assets/images/62.jpg'
import img63 from'../assets/images/63.jpg'
import img70 from'../assets/images/70.jpg'
import img71 from'../assets/images/71.jpg'
import img72 from'../assets/images/72.jpg'
import img73 from'../assets/images/73.jpg'
import img6 from'../assets/images/11.webp'
import img7 from'../assets/images/12.webp'
import img8 from'../assets/images/13.webp'
import img9 from'../assets/images/14.webp'
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useParams } from 'react-router-dom';
export default function ViewDetails() {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);
    const handleAddReview = (newReview) => {
      setReviews((prevReviews) => [newReview, ...prevReviews]);
    }
    const [item,setItem]=useState([])
    const[images,setImages]=useState({
            img1: img1, 
            img2: img2,
            img3: img3,
            img4: img4,  
    })
    var changeImages=()=>{
        setImages({
            img1: img20, 
            img2: img24,
            img3: img22,
            img4: img23,
          });
    }
    var changeImages1=()=>{
        setImages({
            img1: img30, 
            img2: img31,
            img3: img32,
            img4: img33,
          });
    }
    var changeImages2=()=>{
        setImages({
            img1: img40,
            img2: img41,
            img3: img42,
            img4: img43,
          });
    }
    var changeImages3=()=>{
      setImages({
          img1: img50,
          img2: img51,
          img3: img52,
          img4: img53,
        });
  }
  var changeImages4=()=>{
    setImages({
        img1: img60,
        img2: img61,
        img3: img62,
        img4: img63,
      });
}
var changeImages5=()=>{
  setImages({
      img1: img70,
      img2: img71,
      img3: img72,
      img4: img73,
    });
}

useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setItem(data));
  }, [id]);
  return (
   <div>
     <div className="flex flex-wrap gap-4 justify-center my-25">
      <div className="p-4 w-full md:w-3/6 flex">
      <div className="imgGallery flex flex-col mr-4 mt-10 hidden md:flex">
  <div style={{backgroundColor:'#F2F2F2', width:"100px", height:'100px'}} className="m-auto">
    <img src={images.img1} alt="" width={83} height={83} style={{margin:"15px"}} />
  </div>
  <div style={{backgroundColor:'#F2F2F2', width:"100px", height:'100px'}} className="my-auto">
    <img src={images.img2} alt="" width={83} height={83} style={{margin:"15px"}} />
  </div>
  <div style={{backgroundColor:'#F2F2F2', width:"100px", height:'100px'}} className="my-auto">
    <img src={images.img3} alt="" width={83} height={83} style={{margin:"15px"}} />
  </div>
  <div style={{backgroundColor:'#F2F2F2', width:"100px", height:'100px'}} className="my-auto">
    <img src={images.img4} alt="" width={83} height={83} style={{margin:"15px"}} />
  </div>
</div>

<img src={item.image} alt="" className="main-image" style={{ width: '300px', height:'auto' ,margin:'auto'}} />
</div>

      <div className="p-4 w-full md:w-2/6">
        <h1 className='text-2xl font-bold'>Women's Hoodie</h1>
        <div className="stars flex mt-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{color:'#7BC7A6'}}            
            className="text-yellow-500"
          >
            <path d="M19.6693 7.2074C19.822 7.32633 19.9368 7.48699 20 7.6699C20.0486 7.85278 20.0444 8.0457 19.9877 8.22625C19.9311 8.4068 19.8244 8.56758 19.68 8.6899L15.55 12.6899L16.55 18.3699C16.5857 18.5574 16.567 18.7512 16.4961 18.9284C16.4252 19.1055 16.3051 19.2588 16.15 19.3699C15.9784 19.4941 15.7718 19.5607 15.56 19.5599C15.3988 19.5604 15.2403 19.5191 15.1 19.4399L9.99998 16.7599L4.87998 19.4299C4.71575 19.517 4.5305 19.5566 4.34503 19.5442C4.15955 19.5318 3.98119 19.468 3.82998 19.3599C3.67483 19.2488 3.55473 19.0955 3.48385 18.9184C3.41297 18.7412 3.39428 18.5474 3.42998 18.3599L4.42998 12.6799L0.299977 8.6799C0.171435 8.55163 0.080249 8.39077 0.0362052 8.21459C-0.00783865 8.03842 -0.00307759 7.85358 0.0499774 7.6799C0.107937 7.50218 0.214554 7.34425 0.357728 7.22406C0.500902 7.10386 0.6749 7.02621 0.859977 6.9999L6.54998 6.1599L9.09998 0.999901C9.18186 0.83083 9.30971 0.688243 9.46889 0.588475C9.62806 0.488706 9.81212 0.435791 9.99998 0.435791C10.1878 0.435791 10.3719 0.488706 10.5311 0.588475C10.6902 0.688243 10.8181 0.83083 10.9 0.999901L13.45 6.1699L19.14 6.9999C19.3328 7.0164 19.5167 7.08848 19.6693 7.2074Z" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{color:'#7BC7A6'}}          >
            <path d="M19.6693 7.2074C19.822 7.32633 19.9368 7.48699 20 7.6699C20.0486 7.85278 20.0444 8.0457 19.9877 8.22625C19.9311 8.4068 19.8244 8.56758 19.68 8.6899L15.55 12.6899L16.55 18.3699C16.5857 18.5574 16.567 18.7512 16.4961 18.9284C16.4252 19.1055 16.3051 19.2588 16.15 19.3699C15.9784 19.4941 15.7718 19.5607 15.56 19.5599C15.3988 19.5604 15.2403 19.5191 15.1 19.4399L9.99998 16.7599L4.87998 19.4299C4.71575 19.517 4.5305 19.5566 4.34503 19.5442C4.15955 19.5318 3.98119 19.468 3.82998 19.3599C3.67483 19.2488 3.55473 19.0955 3.48385 18.9184C3.41297 18.7412 3.39428 18.5474 3.42998 18.3599L4.42998 12.6799L0.299977 8.6799C0.171435 8.55163 0.080249 8.39077 0.0362052 8.21459C-0.00783865 8.03842 -0.00307759 7.85358 0.0499774 7.6799C0.107937 7.50218 0.214554 7.34425 0.357728 7.22406C0.500902 7.10386 0.6749 7.02621 0.859977 6.9999L6.54998 6.1599L9.09998 0.999901C9.18186 0.83083 9.30971 0.688243 9.46889 0.588475C9.62806 0.488706 9.81212 0.435791 9.99998 0.435791C10.1878 0.435791 10.3719 0.488706 10.5311 0.588475C10.6902 0.688243 10.8181 0.83083 10.9 0.999901L13.45 6.1699L19.14 6.9999C19.3328 7.0164 19.5167 7.08848 19.6693 7.2074Z" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{color:'#7BC7A6'}}          >
            <path d="M19.6693 7.2074C19.822 7.32633 19.9368 7.48699 20 7.6699C20.0486 7.85278 20.0444 8.0457 19.9877 8.22625C19.9311 8.4068 19.8244 8.56758 19.68 8.6899L15.55 12.6899L16.55 18.3699C16.5857 18.5574 16.567 18.7512 16.4961 18.9284C16.4252 19.1055 16.3051 19.2588 16.15 19.3699C15.9784 19.4941 15.7718 19.5607 15.56 19.5599C15.3988 19.5604 15.2403 19.5191 15.1 19.4399L9.99998 16.7599L4.87998 19.4299C4.71575 19.517 4.5305 19.5566 4.34503 19.5442C4.15955 19.5318 3.98119 19.468 3.82998 19.3599C3.67483 19.2488 3.55473 19.0955 3.48385 18.9184C3.41297 18.7412 3.39428 18.5474 3.42998 18.3599L4.42998 12.6799L0.299977 8.6799C0.171435 8.55163 0.080249 8.39077 0.0362052 8.21459C-0.00783865 8.03842 -0.00307759 7.85358 0.0499774 7.6799C0.107937 7.50218 0.214554 7.34425 0.357728 7.22406C0.500902 7.10386 0.6749 7.02621 0.859977 6.9999L6.54998 6.1599L9.09998 0.999901C9.18186 0.83083 9.30971 0.688243 9.46889 0.588475C9.62806 0.488706 9.81212 0.435791 9.99998 0.435791C10.1878 0.435791 10.3719 0.488706 10.5311 0.588475C10.6902 0.688243 10.8181 0.83083 10.9 0.999901L13.45 6.1699L19.14 6.9999C19.3328 7.0164 19.5167 7.08848 19.6693 7.2074Z" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{color:'#7BC7A6'}}          >
            <path d="M19.6693 7.2074C19.822 7.32633 19.9368 7.48699 20 7.6699C20.0486 7.85278 20.0444 8.0457 19.9877 8.22625C19.9311 8.4068 19.8244 8.56758 19.68 8.6899L15.55 12.6899L16.55 18.3699C16.5857 18.5574 16.567 18.7512 16.4961 18.9284C16.4252 19.1055 16.3051 19.2588 16.15 19.3699C15.9784 19.4941 15.7718 19.5607 15.56 19.5599C15.3988 19.5604 15.2403 19.5191 15.1 19.4399L9.99998 16.7599L4.87998 19.4299C4.71575 19.517 4.5305 19.5566 4.34503 19.5442C4.15955 19.5318 3.98119 19.468 3.82998 19.3599C3.67483 19.2488 3.55473 19.0955 3.48385 18.9184C3.41297 18.7412 3.39428 18.5474 3.42998 18.3599L4.42998 12.6799L0.299977 8.6799C0.171435 8.55163 0.080249 8.39077 0.0362052 8.21459C-0.00783865 8.03842 -0.00307759 7.85358 0.0499774 7.6799C0.107937 7.50218 0.214554 7.34425 0.357728 7.22406C0.500902 7.10386 0.6749 7.02621 0.859977 6.9999L6.54998 6.1599L9.09998 0.999901C9.18186 0.83083 9.30971 0.688243 9.46889 0.588475C9.62806 0.488706 9.81212 0.435791 9.99998 0.435791C10.1878 0.435791 10.3719 0.488706 10.5311 0.588475C10.6902 0.688243 10.8181 0.83083 10.9 0.999901L13.45 6.1699L19.14 6.9999C19.3328 7.0164 19.5167 7.08848 19.6693 7.2074Z" />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{color:'#7BC7A6'}}          >
            <path d="M19.6693 7.2074C19.822 7.32633 19.9368 7.48699 20 7.6699C20.0486 7.85278 20.0444 8.0457 19.9877 8.22625C19.9311 8.4068 19.8244 8.56758 19.68 8.6899L15.55 12.6899L16.55 18.3699C16.5857 18.5574 16.567 18.7512 16.4961 18.9284C16.4252 19.1055 16.3051 19.2588 16.15 19.3699C15.9784 19.4941 15.7718 19.5607 15.56 19.5599C15.3988 19.5604 15.2403 19.5191 15.1 19.4399L9.99998 16.7599L4.87998 19.4299C4.71575 19.517 4.5305 19.5566 4.34503 19.5442C4.15955 19.5318 3.98119 19.468 3.82998 19.3599C3.67483 19.2488 3.55473 19.0955 3.48385 18.9184C3.41297 18.7412 3.39428 18.5474 3.42998 18.3599L4.42998 12.6799L0.299977 8.6799C0.171435 8.55163 0.080249 8.39077 0.0362052 8.21459C-0.00783865 8.03842 -0.00307759 7.85358 0.0499774 7.6799C0.107937 7.50218 0.214554 7.34425 0.357728 7.22406C0.500902 7.10386 0.6749 7.02621 0.859977 6.9999L6.54998 6.1599L9.09998 0.999901C9.18186 0.83083 9.30971 0.688243 9.46889 0.588475C9.62806 0.488706 9.81212 0.435791 9.99998 0.435791C10.1878 0.435791 10.3719 0.488706 10.5311 0.588475C10.6902 0.688243 10.8181 0.83083 10.9 0.999901L13.45 6.1699L19.14 6.9999C19.3328 7.0164 19.5167 7.08848 19.6693 7.2074Z" />
          </svg>
        <span style={{color:'#7BC7A6'}} className='ml-2'>(297)</span>
      
        </div>
        <div className='flex mt-3'>
      <div className="flex items-center">
       <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{color:'#FF8256'}}>
  <path
    d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
    fill="currentColor"
  />
</svg><p className='text-2xl font-bold mb-2 mx-2'>spreadShop</p><p className='text-2xl font-bold mx-12 mb-2'>$28.49</p>
       </div>
       
      </div>
      <div className='flex mt-3'>
      <div className="flex items-center">
       <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{color:'#946BCE'}}>
  <path
    d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
    fill="currentColor" />
</svg><p className='text-2xl font-bold mb-2 mx-2'>spreadConnect</p> <p className='text-2xl font-bold mx-4 mb-2'>$23.37</p>
       </div>
       
      </div>
      <div className="flex w-full text-xl my-10">
      Hooded Lightweight Sweatshirt for Women, 50% cotton/ 50% polyester, Brand: Jerzees
      </div>
      <h6 className='font-bold flex'>Colors</h6>
      <div className="flex circles my-4 flex-wrab">
      <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#6E2A81', 
    marginRight:'10px'
  }}
  onClick={changeImages}
  ></div>  
   <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#ED396C', 
    marginRight:'10px'
  }}
    onClick={changeImages1}>
   </div>  
   
     <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#FAB7C5', 
    marginRight:'10px'
  }}  onClick={changeImages2}>
   </div>  
   
     <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#333333', 
    marginRight:'10px'
  }} onClick={changeImages3}></div>  
   <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#3068B4', 
    marginRight:'10px'
  }} onClick={changeImages4}></div> 
        <div
  style={{
    width: '33px',
    height: '33px',
    borderRadius: '50%',
    backgroundColor: '#00224C', 
    marginRight:'10px'
  }} onClick={changeImages5}></div> 
    </div>
    <ReviewForm onAddReview={handleAddReview} />
   
     </div>
    
    </div>
    <div style={{backgroundColor:'#7BC7A6'}} className='flex flex-wrap my-5 gap-4 justify-center overflow-hidden py-20'>
    <h2 className='text-2xl font-bold w-full px-15'>Product Details</h2>
    <div className='w-full md:w-2/6 p-10' style={{backgroundColor:'white',borderRadius:'10px'}}>
        <h2 className='text-2xl font-bold my-5' >Women's Hoodie</h2>
      
        <p>
        This plush pullover is perfect for the gym, errands or kicking around the house. The midweight fabric makes for a versatile under, over or solo layer. A staple in casual comfort, this classic style is a must-own.
        </p>
        <ul>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    50% cotton/50% polyester | Fabric Weight: 8 oz (midweight)
  </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    Soft, plush inside  </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    Adjustable drawstring hood  </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    Ribbed cuffs and waist  </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    PLEASE NOTE: item runs big, it is recommended to order a size down  </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    Imported; processed and printed in the U.S.A.
    </li>
  <li className='my-3 flex'>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: '#7BC7A6', marginRight: '10px',marginTop:'5px' }}  
    >
      <path
        d="M12.0734 4.24726L7.84374 -2.56853e-08L2.57921e-08 7.87637L12.0734 20L24.1667 7.87637L16.3229 -5.34514e-08L12.0734 4.24726ZM12.0734 16.3709L3.61408 7.87637L7.84374 3.62911L12.0734 7.87637L16.2832 3.64905L20.5327 7.89631L12.0734 16.3709Z"
        fill="currentColor"
      />
    </svg>
    
    Made with sustainably sourced USA grown cotton
    </li>
</ul>

    </div>
    <div className='w-full md:w-2/6 p-10' style={{backgroundColor:'white',borderRadius:'10px',height:'fit-content'
    }}>
        <h2 className='text-2xl font-bold my-5' >Size's Guide</h2>
        <div className="flex flex-wrap"> <img src={img5} width={190}height={190} alt="" />
        <table style={{ fontWeight: 'normal', borderCollapse: 'separate', borderSpacing: '10px' }}>
  <thead>
    <tr style={{color:'#7BC7A6'}}>
      <td style={{ padding: '8px' }}>Size</td>
      <td style={{ padding: '8px' }}>A (mm)</td>
      <td style={{ padding: '8px' }}>B (mm)</td>
      <td style={{ padding: '8px' }}>C (mm)</td>
    </tr>
  </thead>
  <tbody>
    <tr className="table-row">
      <td style={{ padding: '8px' }}>S</td>
      <td style={{ padding: '8px' }}>673</td>
      <td style={{ padding: '8px' }}>508</td>
      <td style={{ padding: '8px' }}>622</td>
    </tr>
    <tr className="table-row">
      <td style={{ padding: '8px' }}>M</td>
      <td style={{ padding: '8px' }}>697</td>
      <td style={{ padding: '8px' }}>546</td>
      <td style={{ padding: '8px' }}>628</td>
    </tr>
    <tr className="table-row">
      <td style={{ padding: '8px' }}>L</td>
      <td style={{ padding: '8px' }}>710</td>
      <td style={{ padding: '8px' }}>584</td>
      <td style={{ padding: '8px' }}>635</td>
    </tr>
    <tr className="table-row">
      <td style={{ padding: '8px' }}>XL</td>
      <td style={{ padding: '8px' }}>773</td>
      <td style={{ padding: '8px' }}>647</td>
      <td style={{ padding: '8px' }}>641</td>
    </tr>
    <tr className="table-row">
      <td style={{ padding: '8px' }}>2XL</td>
      <td style={{ padding: '8px' }}>786</td>
      <td style={{ padding: '8px' }}>711</td>
      <td style={{ padding: '8px' }}>647</td>
    </tr>
  </tbody>
</table></div>
    

    </div>
</div>
<div style={{backgroundColor:'#E6DACE',height:'fit-content',marginTop:'-20px'}} className=" p-20 text-gray-800">
  <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

  <div className="flex flex-col md:flex-row gap-10">
    {/* Left side: ratings summary */}
    <div className="w-full md:w-1/2 space-y-4">
      <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        <span className="text-black">(297)</span>
      </div>
      {[
        { stars: 5, count: 232 },
        { stars: 4, count: 43 },
        { stars: 3, count: 12 },
        { stars: 2, count: 6 },
        { stars: 1, count: 4 },
      ].map(({ stars, count }) => {
        const percent = (count / 297) * 100;
        return (
          <div key={stars} className="flex items-center gap-2 text-sm">
            <span className="w-12">{stars} stars</span>
            <div className="flex-1 rounded-full h-2" style={{backgroundColor:'#D7C6B6',height:"20px"}}>
              <div
                className="bg-green-600 rounded-full"
                style={{ width: `${percent}%`,height:"20px" }}
              />
            </div>
            <span className="w-6 text-right">{count}</span>
          </div>
        );
      })}
    </div>

    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md max-h-[400px] overflow-y-auto space-y-4">
      {[
        {
          date: 'December 26, 2024',
          comment:
            'It was for my granddaughter and she absolutely loved it! It fit her perfectly and wore it the rest of the day right after she opened it on Christmas Eve.',
        },
        {
          date: 'January 26, 2024',
          comment: 'Love the design and comfortable',
        },
        {
          date: 'January 12, 2024',
          comment:
            'The XL size is kinda oversized to me which I enjoyed actually, I will be wearing it with tights!',
        },
        {
          date: 'January 6, 2024',
          comment: 'Daughter absolutely loves it',
        },
        {
          date: 'October 25, 2023',
          comment: '',
        },
      ].map((review, idx) => (
        <div key={idx} className="border-b pb-2">
          <div className="flex items-center text-green-600 text-sm mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          
          <p className="text-xs text-gray-500 mb-1">{review.date}</p>
          <p className="text-sm">{review.comment}</p>

        </div>

      ))}
                <ReviewList reviews={reviews} />

    </div>
  </div>
</div>
<div style={{backgroundColor:'white',height:'fit-content',marginTop:'-20px'}} className=" p-20 text-gray-800">
  <h2 className="text-3xl font-bold mb-6">Related Products</h2>

  <div className="products grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
  {/* Card 1 */}
  <div className="card1">
    <img src={img6} alt="" />
    <h2 className="hover:text-[#FF8256] transition-colors duration-300">Unisex Heavyweight Hoodie</h2>

    <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      <span className="text-black">(72)</span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card2">
    <img src={img7} alt="" />
    <h2 className="hover:text-[#FF8256] transition-colors duration-300">Unisex Heavyweight Hoodie</h2>

    <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      <span className="text-black">(1)</span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card3">
    <img src={img8} alt="" />
    <h2 className="hover:text-[#FF8256] transition-colors duration-300">Unisex Heavyweight Hoodie</h2>

    <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      <span className="text-black">(43)</span>
    </div>
  </div>

  {/* Card 4 */}
  <div className="card4">
    <img src={img9} alt="" />
    <h2 className="hover:text-[#FF8256] transition-colors duration-300">Unisex Heavyweight Hoodie</h2>

    <div className="flex items-center gap-2 text-green-600 text-lg font-semibold">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      <span className="text-black">(4)</span>
    </div>
  </div>
</div>


</div>
<div style={{ display: 'flex', justifyContent: 'center', gap: '24px',height:"65px",backgroundColor:'black'}}>
<i className="fa fa-instagram" style={{ width: '23px', height: '23px', fontSize: '23px',color:'white',marginTop:'8px' }}></i> {/* أيقونة Instagram */}
<i className="fa fa-facebook hover:text-[#FF8256]" style={{ width: '23px', height: '23px', fontSize: '23px', fontWeight: 'bold', color: 'white', marginTop: '8px' }}></i>
<i className="fa fa-pinterest-p hover:text-[#FF8256]" style={{ width: '23px', height: '23px', fontSize: '23px', color: 'white', marginTop: '8px' }}></i>
<i className="fa fa-youtube-play hover:text-[#FF8256]" style={{ width: '23px', height: '23px', fontSize: '23px', color: 'white', marginTop: '8px' }}></i>
<i className="fa fa-x hover:text-[#FF8256]" style={{ width: '23px', height: '23px', fontSize: '23px', color: 'white', marginTop: '8px' }}></i>

</div>




    </div>
 
  );
}
