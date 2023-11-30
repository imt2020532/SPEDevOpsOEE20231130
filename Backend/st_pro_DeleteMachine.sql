CREATE PROCEDURE DeleteMachine
    @MID INT,
    @login VARCHAR(255),
    @session VARCHAR(255)
AS
BEGIN
    DECLARE @date VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @time VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE M_Machines
    SET int_statuscode = -1,
        ch_udate = @date,
        ch_utime = @time,
        ch_uulogin = @login,
        ch_uusession = @session
    WHERE pkint_Machine = @MID;
END

EXEC DeleteMachine
    @MID = 100,
    @login = 'Anwit Del',
    @session = 'Sankul Del';