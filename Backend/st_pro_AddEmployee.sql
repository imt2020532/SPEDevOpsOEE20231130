CREATE PROCEDURE AddEmployee
    @EmpName VARCHAR(255),
    @ulogin VARCHAR(255),
    @usession VARCHAR(255)
AS
BEGIN
    DECLARE @cdate VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @ctime VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    INSERT INTO Employee (EmpName, cdate, ctime, ulogin, usession, udate, utime, uulogin, uusession, statuscode)
    VALUES (@EmpName, @cdate, @ctime, @ulogin, @usession, NULL, NULL, NULL, NULL, 0);
END

EXEC AddEmployee
    @EmpName = 'Vaishali Damale',
    @ulogin = 'Vassy.Damz',
    @usession = 'ABC456';
