CREATE PROCEDURE DeleteShift
    @id INT,
    @login VARCHAR(255),
    @session VARCHAR(255)
AS
BEGIN
    DECLARE @date VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @time VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE M_Shifts 
    SET ch_uulogin = @login,
        ch_uusession = @session,
        ch_udate = @date,
        ch_utime = @time,
        int_statuscode = -1

    WHERE pkint_Shift = @id;
END


EXEC DeleteShift
    @id = 73,
    @login = 'Anwit Del',
    @session = '123 Del';
