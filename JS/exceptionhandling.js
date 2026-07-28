try {
    console.log(a); // a is not defined
} catch (error) {
    console.log(error.message);
}



try {
    console.log("Inside try");
    console.log(x); // Error
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Finally block executed");
}
