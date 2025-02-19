import { Image } from "expo-image";
import styled from "styled-components/native";

export const DetailContainerIcons = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
`;

export const IconButton = styled(Image)`
  width: 100px;
  height: 100px;
  content-fit: cover;
`;
