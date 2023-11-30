CREATE PROCEDURE UpdateShift
    @id INT,
    @name VARCHAR(255),
    @login VARCHAR(255),
    @session VARCHAR(255),
	@st VARCHAR(255),
	@et VARCHAR(255),
	@duration VARCHAR(255)
AS
BEGIN
    DECLARE @date VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @time VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE M_Shifts
    SET ch_name = @name,
        ch_uulogin = @login,
        ch_uusession = @session,
        ch_udate = @date,
        ch_utime = @time,
        ch_StartTime = @st,
		ch_EndTime = @et,
		ch_Minute = @duration
    WHERE pkint_Shift = @id;
END


EXEC UpdateShift
    @id = 73,
    @name = 'Suhas',
    @login = 'Damu',
    @session = '123',
	@st = '10AM',
	@et = '12PM',
	@duration = '120';
