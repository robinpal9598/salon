import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const BASE_URL=process.env.REACT_APP_BASE_URL;
function RadioButtonForm() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [services, setServices] = useState([]);
  const [date, setSelectedDate] = useState('');
  const flag = false;
  var currDate = new Date();
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setServices((prevOptions) => [...prevOptions, value]);
    } else {
      setServices((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(services);
    let result = "";
    {
      const bookingDate = new Date(date);
      currDate>bookingDate? alert("Please Select the correct date") : services.length === 0 ? alert("Please Select the services") :
      result = await fetch(`${BASE_URL}/appointment`, {
        method: "post",
        body: JSON.stringify({ email, phone, name, services, date, flag }),
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
      })
    }

    navigate('/profile');
    console.log(services);
    console.log(date);
  };

  const options = [
    { label: ' Facial', value: 'facial' },
    { label: ' Hair Care', value: 'Hair Care' },
    { label: ' Skin Care', value: 'Skin Care' },
    { label: ' Bridal Makeup', value: 'bridal' },
    { label: ' Party Makeup', value: 'Party' },
    // Add more options as needed
  ];

  return (
    <div className="border-1 border-solid sm:w-[50%] sm:mx-auto bg-pink-100 border-black">
      <h1 className='text-3xl flex justify-center'>Book Appointment</h1>
      <form onSubmit={handleSubmit} className='my-10'>
        <div className="my-2 mx-3">
          <h1 className='text-2xl'>Name</h1>
          <input type="text" className="form-control flex justify-center " required onChange={(e) => setName(e.target.value)} value={name} id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Name" />
        </div>
        <div className="my-2 mx-3">
          <h1 className='text-2xl' >Email</h1>
          <input type="email" className="form-control flex justify-center" onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /></div>
        <div className="my-2 mx-3">
          <h1 className='text-2xl'>Phone number</h1>
          <input type="number" className="form-control flex justify-center" required onChange={(e) => setPhone(e.target.value)} value={phone} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
        </div>
        <label>
          <div className="selDate mx-3 text-2xl">
            Select Date:
            <input className='mx-2'
              required
              type="date"
              value={date}

              onChange={(e) => setSelectedDate(e.target.value)}

            />
          </div>
        </label>
        <div className="text-xl mx-3">Select Services</div>
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input className='mx-3'
                type="radio"
                value={option.value}
                checked={services.includes(option.value)}
                onChange={handleOptionChange}
              />
              {option.label}
            </label>
          </div>
        ))}
        <button type="submit" className='border-2 border-solid mx-3 my-5 px-2 py-1 bg-pink-800 text-white hover:bg-pink-950 rounded-2xl'>Book Appointment</button>
      </form>
    </div>
  );
}

export default RadioButtonForm;
