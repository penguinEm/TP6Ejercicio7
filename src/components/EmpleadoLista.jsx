import { ListGroup } from "react-bootstrap";
import EmpleadoRenglon from "./EmpleadoRenglon";

const EmpleadoList = () => {
  /* Array de objetos empleados ----------------------------- */
  const empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "./src/assets/avat01.png",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "./src/assets/avat02.png",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "src/assets/avat03.png",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "src/assets/avat04.png",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "src/assets/avat05.png",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "src/assets/avat06.png",
    },
    {
      id: 7,
      fullName: "Diego Lopez",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "src/assets/avat07.png",
    },
    {
      id: 8,
      fullName: "Carlos Fuentes",
      title: "Backend Dev",
      department: "Engineering",
      pic: "src/assets/avat08.png",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "src/assets/avat09.png",
    },
  ];

  return (
    <>
      <ListGroup className="d-flex justify-content-center align-items-center">
        {empleados.map((empleado) => (
          <EmpleadoRenglon
            key={empleado.id}
            fullName={empleado.fullName}
            title={empleado.title}
            department={empleado.department}
            pic={empleado.pic}
          ></EmpleadoRenglon>
        ))}
      </ListGroup>
    </>
  );
};

export default EmpleadoList;
