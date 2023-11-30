CREATE TABLE Employee (
    EmpID INT IDENTITY(1, 1) PRIMARY KEY,
    EmpName VARCHAR(255),
    cdate VARCHAR(10),
    ctime VARCHAR(8),
    ulogin VARCHAR(255),
    usession VARCHAR(255),
    udate VARCHAR(10),
    utime VARCHAR(8),
    uulogin VARCHAR(255),
    uusession VARCHAR(255),
    statuscode INT
);