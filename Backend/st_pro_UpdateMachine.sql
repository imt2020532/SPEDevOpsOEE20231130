CREATE PROCEDURE UpdateMachine
    @MachineID INT,
    @ch_name VARCHAR(255),
	@ch_shortname VARCHAR(255),
    @ch_uulogin VARCHAR(255),
    @ch_uusession VARCHAR(255)
AS
BEGIN
    DECLARE @date VARCHAR(10) = CONVERT(VARCHAR(10), GETDATE(), 112);
    DECLARE @time VARCHAR(8) = REPLACE(CONVERT(VARCHAR(8), GETDATE(), 108), ':', '');

    UPDATE M_Machines
    SET ch_name = @ch_name,
		ch_shortname = @ch_shortname,
        ch_uulogin = @ch_uulogin,
        ch_uusession = @ch_uusession,
        ch_udate = @date,
        ch_utime = @time
    WHERE pkint_Machine = @MachineID;
END


EXEC UpdateMachine
    @MachineID = 100,
    @ch_name = 'Pixel 6',
    @ch_shortname = 'Mobile',
    @ch_uulogin = 'Anwit',
	@ch_uusession = 'buffer';
