
import UserInput from "./userInput";

type TInputField = {
  id: number;
  htmlFor: string;
  name: string;
  placeholder: string;
  type: string
};

const Contact = () => {




  const inputFields: TInputField[] = [
    {
      id: 1,
      htmlFor: "fName",
      name: "fName",
      placeholder: "Name",
      type: "text",
    
    },
    {
      id: 2,
      htmlFor: "email",
      name: "email",
      placeholder: "Email",
      type: "email",
  
    },
    {
      id: 3,
      htmlFor: "message",
      name: "message",
      placeholder: "Enter your message... ",
      type: "textarea",
      
    },
  ];


  return (
    <div id="contact" className="bg-black w-full text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto py-24 p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center lg:text-left">
          <p
            className="text-4xl 
                    font-bold border-b-2 border-green-200 inline"
          >
            Contact
          </p>
          <div className=" italic py-12 text-lg lg:text-xl">
            Submit the form below and get in touch!
          </div>
        </div>

        <div className="flex justify-center items-center">
          <form className="grid gap-8 w-9/12 md:w-3/5" method="POST" action="https://getform.io/f/03ac2e42-6a4d-493b-a369-b0541a6b4786">         
              

              
                {inputFields.map(
                  ({ id, htmlFor, name, placeholder, type }) => {
                    return (
                      <UserInput
                        key={id}
                        htmlFor={htmlFor}
                        name={name}
                        placeholder={placeholder}
                        type={type}
                      />
                    );
                  }
                )}
                <div className="grid place-items-center">
                  <button className=" py-3 my-8 w-full  hover:text-black duration-300 hover:bg-green-200 rounded-lg shadow-lg ">
                  Submit
                </button>
              </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
