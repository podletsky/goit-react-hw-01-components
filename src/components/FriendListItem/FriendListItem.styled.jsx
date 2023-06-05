import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  list-style: none;
  width: 300px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 15px -2px rgba(66, 68, 90, 1);
`;

export const Avatar = styled.img`
  border-radius: 2px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
    // switch (props.isOnline) {
    //   case true:
    //     return 'green';
    //   case false:
    //     return 'red';
    //   default:
    //     return 'black';
  }};
`;
