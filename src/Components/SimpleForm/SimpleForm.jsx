

const SimpleForm = () => {

 const handleSubmit = e => {
    e.preventDefault();
    // use the upper line to preventing re loading the page
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
    console.log("Submit butoon clicked");
 }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="phone" id="" />
                <br />
                <input /*onClick={handleSubmit}*/ type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;


