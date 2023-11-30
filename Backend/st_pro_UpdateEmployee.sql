CREATE PROCEDURE UpdateEmployee
    @EmpID INT,
    @EmpName VARCHAR(255),
    @ulogin VARCHAR(255),
    @usession VARCHAR(255)
AS
BEGIN
    DECLARE @udate VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @utime VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE Employee
    SET EmpName = @EmpName,
        ulogin = @ulogin,
        usession = @usession,
        udate = @udate,
        utime = @utime,
        uulogin = @ulogin,
        uusession = @usession
    WHERE EmpID = @EmpID;
END


EXEC UpdateEmployee
    @EmpID = 1,
    @EmpName = 'Suhas Damale',
    @ulogin = 'Damu',
    @usession = 'AAA123';
