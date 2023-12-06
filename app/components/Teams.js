"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const expertise = [
  " Creative Writer",
  "Graphic Designer",
  "Web Developer",
  "Social Media Specialist",
  "Senior Digital Marketing",
];

const Services = ({ altText, caption, quality, imagePath, description }) => {
  return (
    <div className="mb-12 p-4 text-center">
      <h3 className="font-semibold text-sm text-black mt-4 mb-3 lg:text-lg">
        {caption}
      </h3>
      <p className="text-sm text-gray-600 mb-3 lg:text-base">{description}</p>

      <div className="flex justify-center items-center rounded-md shadow-md overflow-hidden mx-auto">
        <Image
          loading="eager"
          quality={quality}
          alt={altText}
          src={imagePath}
          width={300}
          height={250}
        />
      </div>
    </div>
  );
};

const ContentTeam = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=4"
        );
        console.log(response.data.results);

        // Menambahkan expertise setiap user
        const usersWithExpertise = response.data.results.map((user, index) => ({
          ...user,
          expertise: expertise[index],
        }));

        setUsers(usersWithExpertise);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around p-4">
        <div className="text-center items-center border rounded-lg p-4 h-74 w-64">
          <img
            quality="100"
            src="/testimonials/avatar3.jpg"
            alt="Ceo"
            className="w-21 h-25 mx-auto mb-2 "
          />
          <p className="text-xl font-semibold">Firman Prabowo</p>
          <p className="text-black text-lg">Our Beloved CEO</p>
          <p className="text-blue-700 underline">Firmanprabowo@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-around p-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="text-center m-4 p-4 border rounded-md bg-secondary">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-20 h-20 mx-auto mb-2 rounded-full"
            />
            <p className="text-lg text-primary font-semibold">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-white">{user.expertise}</p>
            <p className="text-primary underline">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <>
      <section id="services" className="pt-28 text-center md:pt-28 sm:pt-30">
        <div className="max-w-6xl px-5 mx-auto mt-0 text-center">
          <div className="px-4 mb-10">
            <h2 className="font-bold text-blue-950 text-4xl mb-5 text-center lg:text-5xl lg:mb-5">
              Meet Our Team
            </h2>
            <p className="text-xs mt-1 lg:text-base">
              We’re the child of the 90's, wildflowers, mutants, and vivid souls
              living on the Earth.
            </p>
          </div>
        </div>
      </section>

      <ContentTeam />
    </>
  );
};

export default TeamSection;
