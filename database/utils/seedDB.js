/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl:"https://s29068.pcdn.co/wp-content/uploads/68th-street-campus-9.jpg.webp"
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl:"https://forward.com/wp-content/uploads/2023/11/iStock-508076201.jpg?_t=1699497729"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl:"https://www.usnews.com/dims4/USNEWS/cc98eaa/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F1e%2Fef%2Fc09954f940139695bcf218fc9084%2F2s9a2340-l.jpg"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstName: "Joe",  // ✅ must be camelCase and match model
		lastName: "Smith",
		email: "joe.smith@example.com",
		gpa: 3.5,
		imageUrl:"https://img.freepik.com/premium-photo/random-ai-image_590832-10782.jpg?semt=ais_hybrid&w=740"
	  });
	  
	  const dummy_student2 = await Student.create({
		firstName: "Mary",
		lastName: "Johnson",
		email: "mary.johnson@example.com",
		gpa: 3.8,
		imageUrl:"https://images.prismic.io/element451/1379a91d-d771-4d2c-af88-1394902912a3_Student+Success.jpg?auto=format&ixlib=react-9.0.3&h=836&w=1254&q=75&dpr=1"
	  });
	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;