import { useContext, useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import SwipeCard from "@/components/SwipeCard/SwipeCard";
import SwipeCardHeader from "@/components/SwipeCardHeader/SwipeCardHeader";
import { usersAmistad, usersCitas } from "@/utils/mockData";
import { UsersContext } from "@/context/UsersContext";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { users, setUsers, isDrawerOpen } = useContext(UsersContext)


  const handleBackgroundColor = () => {
    if (users == usersAmistad) {
      return ["#9072E5", "#7086E3"]
    } else if (users == usersCitas) {
      return ["#FFB03A", "#FF6B86"]
    } else {
      return ["#FF6B86", "#FF58A4"]
    }
  }


  const Background = styled(LinearGradient).attrs({
    colors: isDrawerOpen ? ["#FEB5DB", "#FEB5DB"] : handleBackgroundColor(),
  })`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

  const NoMoreText = styled.Text`
    color: black;
    font-size: 100px;
    text-align: center;
  `;

  const handleSwipeLeft = () => {
    console.log("Izquierda");
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleSwipeRight = () => {
    console.log("Derecha");
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (

    <Background>
      {users[currentIndex] ? (
        <>
          <SwipeCardHeader setUsers={setUsers} users={users} />
          <SwipeCard
            user={users[currentIndex]}
            key={users[currentIndex].id}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        </>
      ) : (
        <NoMoreText>No hay más personas</NoMoreText>
      )}
    </Background>
  );
}
