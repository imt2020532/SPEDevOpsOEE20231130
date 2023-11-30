CREATE PROCEDURE DeleteEmployee
    @EmpID INT,
    @uulogin VARCHAR(255),
    @uusession VARCHAR(255)
AS
BEGIN
    DECLARE @udate VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @utime VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE Employee
    SET statuscode = -1,
        udate = @udate,
        utime = @utime,
        uulogin = @uulogin,
        uusession = @uusession
    WHERE EmpID = @EmpID;
END

EXEC DeleteEmployee
    @EmpID = 1,
    @uulogin = 'Anwit Damz',
    @uusession = 'Samadhan Sankul';