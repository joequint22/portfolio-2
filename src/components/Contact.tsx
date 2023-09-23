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
    <div name="contact" className="bg-gradient-to-b from-black via-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg mx-auto py-24 p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p
            className="text-4xl 
                    font-bold border-b-4 border-gray-500 inline"
          >
            Contact
          </p>
          <div className="py-12 px-4 text-xl">
                Submit the form below to get in touch with me!
          </div>
        </div>

        <div className="flex justify-center items-center">
          <form className="grid gap-8 w-9/12 md:w-3/5" onSubmit={() => console.log("hello")} method="POST" action="https://getform.io/f/03ac2e42-6a4d-493b-a369-b0541a6b4786">         
              

              
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
                <button className=" bg-gradient-to-b py-3 my-8 w-full mx-auto from-cyan-500 to-blue-500 px-6 duration-300 hover:scale-105 rounded-lg shadow-lg ">
                Submit
              </button>

              
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
