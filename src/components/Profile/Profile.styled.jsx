import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  padding: 15px;
  width: 300px;
  border-radius: 4px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 10px 5px;
  background-color: #fff;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #92a8d1;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Name = styled.h1`
  color: #121f26;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #737b80;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  color: #737b80;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Stats = styled.ul`
display: flex ;
padding: 0;
width: '100%;
  
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  width: 300px;
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
`;

export const Label = styled.span`
  font-size: 12px;
  color: #7d7d7d;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
