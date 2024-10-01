public class CreateOpps {
    List<Opportunity> lstOpportunity2create = new List<Opportunity>();
    public void createOpportunity(List<CampaignMember> lstcampaignMember)
    {
		List<Account> lstAcc = [select id,website from Account];
		for(Account acc: lstAcc){
			List<Opportunity> lstOpp = [select id,accountId from Opportunity where accountId=:acc.Id];
		}
    }     
}
