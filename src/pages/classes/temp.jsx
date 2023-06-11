const handleSelect = (data) => {
  if (user && user.email) {
    data.selectedClass = "selected";
    const selectItem = {
      image: data.image,
      email: user.email,
      classId: data._id,
      title: data.title,
      instructor: data.instructor,
      availableSeats: data.availableSeats,
      price: data.price,
      selectedClass: data.selectedClass,
    };

    axiosSecure.post("/selected-classes", selectItem).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class selected successfully",
          showConfirmButton: false,
          timer: 700,
        });
      }
    });
  } else {
    return (
      navigate("/login"),
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Login !",
        showConfirmButton: false,
        timer: 1000,
      })
    );
  }
};



const handleSelectClass = (classData) => {
  if (user && user.email) {
    classData.selectedClass = "selected";
    const selectItem = {
      image: classData.classImage,
      email: user.email,
      classI: classData._id,
      title: classData.classTitle,
      instructor: classData.instructorName,
      availableSeats: classData.availableSeats,
      courseFee: classData.courseFee,
      selectedClass: classData.selectedClass,
    };
    axiosSecure.post("/selectedclass", selectItem).then((classData) => {
      if (classData.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class selected successfully",
          showConfirmButton: false,
          timer: 700,
        });
      } else {
        return (
          navigate("/login"),
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Please Login !",
            showConfirmButton: false,
            timer: 1000,
          })
        );
      }
    });
  }
};